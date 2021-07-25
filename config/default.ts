export default {
  SERVICE: process.env.SERVICE || 'arive-backend',
  PORT: process.env.PORT || 3000,
  HOST: process.env.HOST || 'localhost',
  MONGODB_URI: process.env.MONGODB_URI || 'mongo'
};