import Hobbies from '../model/hobbie.schema';
import { GetHobbiesByUserDto } from '../dto/get.hobbies.byuser.dto';
import { DeleteHobbieDto } from '../dto/delete.hobbie.dto';
import { CreateHobbieDto } from '../dto/create.hobbie.dto';

export class HobbieService {
  public createHobbie = async (input: CreateHobbieDto) => {
    try {
      return await Hobbies.create(input);
    } catch (error) {
      throw new Error(error);
    }
  };

  public getHobbiesByUser = async (input: GetHobbiesByUserDto) => {
    try {
      return await Hobbies.find({
        user: input.userId
      });
    } catch (error) {
      throw new Error(error);
    }
  };

  public deleteHobbie = async (input: DeleteHobbieDto) => {
    try {
      return await Hobbies.deleteOne({
        _id: input.id
      });
    } catch (error) {
      throw new Error(error);
    }
  };
};
