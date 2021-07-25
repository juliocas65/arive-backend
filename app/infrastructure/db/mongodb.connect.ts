import mongoose from 'mongoose';
import config from 'config';

function connect() {
  const mongoDBURI = config.get('MONGODB_URI') as string;
  const service = config.get('SERVICE') as string;
  return mongoose
    .connect(mongoDBURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    })
    .then(() => {
      console.info(`${service} connected with database MongoDB`);
    })
    .catch(error => {
      console.error('MongoDB connection error:', error);
      process.exit(1);
    });
};

export default connect;