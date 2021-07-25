import express, { Request, Response } from 'express';
import config from 'config';
import connect from './app/infrastructure/db/mongodb.connect';
import userRoutes from './app/domain/user/routes';
import hobbieRoutes from './app/domain/hobbie/routes';
import swaggerUi from 'swagger-ui-express';
import YAML from 'yamljs';

const swaggerDocument = YAML.load('./swagger.yaml');

const port = config.get('PORT') as number;
const host = config.get('HOST') as string;
const service = config.get('SERVICE') as string;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const server = app.listen(port, host, () => {
  connect();

  app.get('/health', (req: Request, res: Response) => res.send({ message: `${service} up and running` }));
  app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

  userRoutes(app);
  hobbieRoutes(app);

  console.log(`${service} listening on http://${host}:${port}`);
});

export default server;