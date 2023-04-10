const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;

const mongoConnect = (callback) => {  
  MongoClient.connect('mongodb+srv://JustUser:xO8ijc3PL7TtBmeo@cluster0.iun9qhb.mongodb.net/RiceRunnerDatabase?retryWrites=true&w=majority')
  .then(client => {
    console.log('Connected!');
    _db = client.db();
    callback();
  })
  .catch(err => {
    console.log(err);
    throw err;
  });
};

const getDB = () => {
  if (_db) {
    return _db;
  }
  throw 'No database found!';
};

exports.mongoConnect = mongoConnect;
exports.getDB = getDB;