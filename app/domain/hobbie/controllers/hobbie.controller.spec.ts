const hobbieServiceMock: any = {};
jest.mock('../services/hobbie.service', () => {
  return {
    HobbieService: jest.fn().mockImplementation(() => hobbieServiceMock)
  };
});
import { HobbieController } from './hobbie.controller';
import { HobbiePassionLevel } from '../model/hobbie.passion-level.enum';
describe('hobbie-controller', () => {
  const hobbieController = new HobbieController();
  const hobbie = { name: '', user: '', passionLevel: HobbiePassionLevel.HIGH, year: 2021 };
  describe('createHobbieHandler', () => {
    it('should call createHobbieHandler successfully', async () => {
      hobbieServiceMock.createHobbie = () => {
        return Promise.resolve({ name: 'hobbie' });
      };
      const result = await hobbieController.createHobbieHandler(hobbie);
      expect(result.status).toBe('SUCCESS');
      expect(result.data).toBeDefined();
    });

    it('should handle error when trying to createHobbieHandler', async () => {
      hobbieServiceMock.createHobbie = () => {
        return Promise.reject(new Error('error'));
      };
      try {
        await hobbieController.createHobbieHandler(hobbie);
      } catch (error) {
        expect(error.status).toBe('ERROR');
        expect(error.message).toBe('error');
      }
    });
  });

  describe('getHobbiesByUserHandler', () => {
    it('should call getHobbiesByUserHandler successfully', async () => {
      hobbieServiceMock.getHobbiesByUser = () => {
        return Promise.resolve([{ name: 'hobbie' }]);
      };
      const result = await hobbieController.getHobbiesByUserHandler({ userId: 'user' });
      expect(result.status).toBe('SUCCESS');
      expect(result.data).toBeDefined();
      expect(result.data).toBeInstanceOf(Array);
      expect(result.data.length).toBe(1);
    });

    it('should handle error when trying to getHobbiesByUserHandler', async () => {
      hobbieServiceMock.getHobbiesByUser = () => {
        return Promise.reject(new Error('error'));
      };
      try {
        await hobbieController.getHobbiesByUserHandler({ userId: 'user' });
      } catch (error) {
        expect(error.status).toBe('ERROR');
        expect(error.message).toBe('error');
      }
    });
  });

  describe('deleteHobbieHandler', () => {
    it('should call getHobbiesHandler successfully', async () => {
      hobbieServiceMock.deleteHobbie = () => {
        return Promise.resolve(true);
      };
      const result = await hobbieController.deleteHobbieHandler({ id: 'user' });
      expect(result.status).toBe('SUCCESS');
    });

    it('should handle error when trying to getHobbiesHandler', async () => {
      hobbieServiceMock.deleteHobbie = () => {
        return Promise.reject(new Error('error'));
      };
      try {
        await hobbieController.deleteHobbieHandler({ id: 'user' });
      } catch (error) {
        expect(error.status).toBe('ERROR');
        expect(error.message).toBe('error');
      }
    });
  });
});