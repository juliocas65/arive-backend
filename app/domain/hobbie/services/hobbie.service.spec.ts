const hobbieModelMock: any = {};
jest.mock('../model/hobbie.schema', () => hobbieModelMock);
import { HobbiePassionLevel } from '../model/hobbie.passion-level.enum';
import { HobbieService } from './hobbie.service';

describe('hobbie-service', () => {
  const hobbieService = new HobbieService();
  const hobbie = { name: '', user: '', passionLevel: HobbiePassionLevel.HIGH, year: 2021 };

  describe('createHobbie', () => {
    it('should create an hobbie successfully', async () => {
      hobbieModelMock.create = async (): Promise<any> => {
        return Promise.resolve('hobbie');
      };
      const result = await hobbieService.createHobbie(hobbie);
      expect(result).toBe('hobbie');
    });

    it('should manage an error creating an hobbie', async () => {
      hobbieModelMock.create = async (): Promise<any> => {
        return Promise.reject(new Error('error'));
      };
      try {
        await hobbieService.createHobbie(hobbie);
      } catch (error) {
        expect(error.message).toBe('Error: error');
      }
    });
  });

  describe('getHobbiesByUser', () => {
    it('should get an array of hobbies successfully', async () => {
      hobbieModelMock.find = async (): Promise<any> => {
        return Promise.resolve([{ name: 'hobbie1' }, { name: 'hobbie2' }]);
      };
      const userId = 'id';
      const result = await hobbieService.getHobbiesByUser({ userId });
      expect(result).toBeInstanceOf(Array);
      expect(result.length).toBe(2);
    });

    it('should manage an error creating an hobbie', async () => {
      hobbieModelMock.find = async (): Promise<any> => {
        return Promise.reject(new Error('error'));
      };
      try {
        const userId = 'id';
        await hobbieService.getHobbiesByUser({ userId });
      } catch (error) {
        expect(error.message).toBe('Error: error');
      }
    });
  });

  describe('deleteHobbie', () => {
    it('should delete an hobbie successfully', async () => {
      hobbieModelMock.deleteOne = async (): Promise<any> => {
        return Promise.resolve(true);
      };
      const id = 'id';
      const result = await hobbieService.deleteHobbie({ id });
      expect(result).toBeTruthy();
    });

    it('should manage an error creating an hobbie', async () => {
      hobbieModelMock.deleteOne = async (): Promise<any> => {
        return Promise.reject(new Error('error'));
      };
      try {
        const id = 'id';
        await hobbieService.deleteHobbie({ id });
      } catch (error) {
        expect(error.message).toBe('Error: error');
      }
    });
  });

});
