const userModelMock: any = {};
jest.mock('../model/user.schema', () => userModelMock);
import { UserService } from './user.service';

describe('user-service', () => {
  const userService = new UserService();

  describe('createUser', () => {
    it('should create an user successfully', async () => {
      userModelMock.create = async (): Promise<any> => {
        return Promise.resolve('user');
      };
      const user = { name: '' };
      const result = await userService.createUser(user);
      expect(result).toBe('user');
    });

    it('should manage an error creating an user', async () => {
      userModelMock.create = async (): Promise<any> => {
        return Promise.reject(new Error('error'));
      };
      const user = { name: '' };
      try {
        await userService.createUser(user);
      } catch (error) {
        expect(error.message).toBe('Error: error');
      }
    });
  });

  describe('getUsers', () => {
    it('should get an array of users successfully', async () => {
      userModelMock.find = async (): Promise<any> => {
        return Promise.resolve([{ name: 'user1' }, { name: 'user2' }]);
      };
      const result = await userService.getUsers();
      expect(result).toBeInstanceOf(Array);
      expect(result.length).toBe(2);
    });

    it('should manage an error creating an user', async () => {
      userModelMock.find = async (): Promise<any> => {
        return Promise.reject(new Error('error'));
      };
      try {
        await userService.getUsers();
      } catch (error) {
        expect(error.message).toBe('Error: error');
      }
    });
  });

});
