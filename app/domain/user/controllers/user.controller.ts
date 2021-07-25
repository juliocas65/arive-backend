import { UserService } from '../services/user.service';
import { CreateUserDto } from '../dto/create.user.dto';
import { successResponse, errorResponse } from '../../../infrastructure/common/response';

export class UserController {

  private readonly userService: UserService;

  constructor() {
    this.userService = new UserService();
  };

  public createUserHandler = async (req: CreateUserDto) => {
    try {
      const user = await this.userService.createUser(req);
      return successResponse(user);
    } catch (e) {
      throw errorResponse(e.message);
    }
  };

  public getUsersHandler = async () => {
    try {
      const users = await this.userService.getUsers();
      return successResponse(users);
    } catch (e) {
      throw errorResponse(e.message);
    }
  };

};
