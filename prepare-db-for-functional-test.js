const { MongoClient, ObjectId } = require('mongodb'); // eslint-disable-line
const documentsMap = {
  users: [
    {
      "_id" : ObjectId("60f9e566f0c67ca495f5fb55"),
      "name" : "Julio",
      "createdAt" : new Date("2021-07-25T21:38:46.375Z"),
      "updatedAt" : new Date("2021-07-25T21:38:46.375Z"),
      "__v" : 0
    }
  ],
  hobbies: [
    {
      "_id" : ObjectId("60fc51ba404c6bb1f2b0e4cf"),
      "name" : "Play Football",
      "user" : ObjectId("60f9e566f0c67ca495f5fb55"),
      "passionLevel" : "Low",
      "year" : 2020,
      "createdAt" : new Date("2021-07-25T17:45:30.634Z"),
      "updatedAt" : new Date("2021-07-25T17:45:30.634Z"),
      "__v" : 0
    },
    {
      "_id" : ObjectId("60fc51bb404c6bb1f2b0e4d1"),
      "name" : "Play Baseball",
      "user" : ObjectId("60f9e566f0c67ca495f5fb55"),
      "passionLevel" : "High",
      "year" : 2020,
      "createdAt" : new Date("2021-07-25T17:45:31.369Z"),
      "updatedAt" : new Date("2021-07-25T17:45:31.369Z"),
      "__v" : 0
    }
  ]
};

module.exports.run = async () => {
  const client = await MongoClient.connect(process.env.MONGODB_URI, { useUnifiedTopology: true });
  const db = client.db('arive');
  const collectionNames = Object.keys(documentsMap);
  const collections = collectionNames.map(collectionName => db.collection(collectionName));
  const promisesDelete = collections.map(collection => collection.deleteMany({}));
  await Promise.all(promisesDelete);
  const promisesInsert = collectionNames.map(
    (collectionName, collectionIndex) => collections[collectionIndex].insertMany(documentsMap[collectionName])
  );
  await Promise.all(promisesInsert);
};