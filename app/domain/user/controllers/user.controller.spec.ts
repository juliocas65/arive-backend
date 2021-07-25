const userServiceMock: any = {};
jest.mock('../services/user.service', () => {
  return {
    UserService: jest.fn().mockImplementation(() => userServiceMock)
  };
});
import { UserController } from './user.controller';
describe('user-controller', () => {
  const userController = new UserController();

  describe('createUserHandler', () => {
    it('should call createUserHandler successfully', async () => {
      const user = { name: '' };
      userServiceMock.createUser = () => {
        return Promise.resolve({ name: 'user' });
      };
      const result = await userController.createUserHandler(user);
      expect(result.status).toBe('SUCCESS');
      expect(result.data).toBeDefined();
    });

    it('should handle error when trying to createUserHandler', async () => {
      const user = { name: '' };
      userServiceMock.createUser = () => {
        return Promise.reject(new Error('error'));
      };
      try {
        await userController.createUserHandler(user);
      } catch (error) {
        expect(error.status).toBe('ERROR');
        expect(error.message).toBe('error');
      }
    });
  });

  describe('getUsersHandler', () => {
    it('should call getUsersHandler successfully', async () => {
      userServiceMock.getUsers = () => {
        return Promise.resolve([{ name: 'user' }]);
      };
      const result = await userController.getUsersHandler();
      expect(result.status).toBe('SUCCESS');
      expect(result.data).toBeDefined();
      expect(result.data).toBeInstanceOf(Array);
      expect(result.data.length).toBe(1);
    });

    it('should handle error when trying to getUsersHandler', async () => {
      userServiceMock.getUsers = () => {
        return Promise.reject(new Error('error'));
      };
      try {
        await userController.getUsersHandler();
      } catch (error) {
        expect(error.status).toBe('ERROR');
        expect(error.message).toBe('error');
      }
    });
  });
});