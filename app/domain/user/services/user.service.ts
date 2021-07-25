import User from '../model/user.schema';
import { CreateUserDto } from '../dto/create.user.dto';

export class UserService {

  public createUser = async (input: CreateUserDto) => {
    try {
      return await User.create(input);
    } catch (error) {
      throw new Error(error);
    }
  };

  public getUsers = async () =>  {
    try {
      return await User.find({});
    } catch (error) {
      throw new Error(error);
    }
  };
};
