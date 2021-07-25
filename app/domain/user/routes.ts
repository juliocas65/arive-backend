import { Express } from 'express';
import { UserController } from './controllers/user.controller';
import { validatePayload } from './../../infrastructure/common/validate';
import { CreateUserDto } from './dto/create.user.dto';

const entity = 'user';
const userController = new UserController();

export default function(app: Express) {
  app.post(`/${entity}`, async (req, res) => {
    let response;
    try {
      const body = new CreateUserDto(req.body);
      await validatePayload(body);
      response = await userController.createUserHandler(body);
      return res.status(201).send(response);
    } catch (error) {
      return res.status(500).send(error);
    }
  });
  app.get(`/${entity}`, async (req, res) => {
    let response;
    try {
      response = await userController.getUsersHandler();
      return res.status(200).send(response);
    } catch (error) {
      return res.status(500).send(error);
    }
  });
};