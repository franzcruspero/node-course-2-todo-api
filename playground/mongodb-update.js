// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/ToDoApp', { useNewUrlParser: true }, (err, client) => {
  if(err){
    return console.log('Unable to connect to MongoDB server');
  };
  console.log('Connected to MongoDB server');
  const db = client.db('ToDoApp');

  // db.collection('Todos').findOneAndUpdate({
  //   _id: new ObjectID('5bb1b701f0b66e936b64ee98')
  // }, {
  //   $set: {
  //     completed: true
  //   }
  // }, {
  //   returnOriginal: false
  // }).then((result) => {
  //   console.log(result);
  // });

  db.collection('Users').findOneAndUpdate({
    _id: new ObjectID('5bafcde76befc68e52339e16')
  }, {
    $set: {
      name: 'Franz'
    },
    $inc: {
      age: 1
    }
  }, {
    returnOriginal: false
  }).then((result) => {
    console.log(result);
  });

// db.close();

});
