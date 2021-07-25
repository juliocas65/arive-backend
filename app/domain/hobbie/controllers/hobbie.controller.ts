import { DeleteHobbieDto } from '../dto/delete.hobbie.dto';
import { GetHobbiesByUserDto } from '../dto/get.hobbies.byuser.dto';
import { HobbieService } from '../services/hobbie.service';
import { CreateHobbieDto } from '../dto/create.hobbie.dto';
import { successResponse, errorResponse } from '../../../infrastructure/common/response';

export class HobbieController {

  private readonly hobbieService: HobbieService;

  constructor() {
    this.hobbieService = new HobbieService();
  }

  createHobbieHandler = async (req: CreateHobbieDto) => {
    try {
      const hobbie = await this.hobbieService.createHobbie(req);
      return successResponse(hobbie);
    } catch (e) {
      throw errorResponse(e.message);
    }
  };

  getHobbiesByUserHandler = async (req: GetHobbiesByUserDto) => {
    try {
      const hobbies = await this.hobbieService.getHobbiesByUser(req);
      return successResponse(hobbies);
    } catch (e) {
      throw errorResponse(e.message);
    }
  };

  deleteHobbieHandler = async (req: DeleteHobbieDto) => {
    try {
      await this.hobbieService.deleteHobbie(req);
      return successResponse(`Hobbie id: ${req.id} deleted successfully`);
    } catch (e) {
      throw errorResponse(e.message);
    }
  };

}
