import { Express } from 'express';
import { HobbieController } from './controllers/hobbie.controller';
import { GetHobbiesByUserDto } from './dto/get.hobbies.byuser.dto';
import { DeleteHobbieDto } from './dto/delete.hobbie.dto';
import { CreateHobbieDto } from './dto/create.hobbie.dto';
import { validatePayload } from './../../infrastructure/common/validate';

const entity = 'hobbie';
const hobbieController = new HobbieController();

export default function(app: Express) {
  app.post(`/${entity}`, async (req, res) => {
    let response;
    try {
      const body = new CreateHobbieDto(req.body);
      await validatePayload(body);
      response = await hobbieController.createHobbieHandler(body);
      return res.status(201).send(response);
    } catch (error) {
      return res.status(500).send(error);
    }
  });
  app.get(`/${entity}/userId/:userId`, async (req, res) => {
    let response;
    try {
      const query = new GetHobbiesByUserDto(req.params);
      await validatePayload(query);
      response = await hobbieController.getHobbiesByUserHandler(query);
      return res.status(200).send(response);
    } catch (error) {
      return res.status(500).send(error);
    }
  });
  app.delete(`/${entity}/:id`, async (req, res) => {
    let response;
    try {
      const query = new DeleteHobbieDto(req.params);
      await validatePayload(query);
      response = await hobbieController.deleteHobbieHandler(query);
      return res.status(200).send(response);
    } catch (error) {
      return res.status(500).send(error);
    }
  });
};