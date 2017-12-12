import { MongoClient } from 'mongodb';

const MONGO_URL = 'mongodb://database:27017/chorus';

export const connect = async () => await MongoClient.connect(MONGO_URL);

export const collections = db => ({
  Posts: db.collection('posts'),
  Comments: db.collection('comments'),
});
