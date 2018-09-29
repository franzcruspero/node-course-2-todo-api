// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

//  Example of ES6 destructuring
// var user = {name: 'franz', age: 24};
// var {name} = user;
//
// console.log(name);

MongoClient.connect('mongodb://localhost:27017/ToDoApp', { useNewUrlParser: true }, (err, client) => {
  if(err){
    return console.log('Unable to connect to MongoDB server');
  };
  console.log('Connected to MongoDB server');
  const db = client.db('ToDoApp');

  // db.collection('Todos').insertOne({
  //   text: 'Something to do',
  //   completed: false
  // }, (err, result) => {
  //   if(err){
  //     return console.log('Unable to insert todo', err);
  //   }
  //
  //   console.log(JSON.stringify(result.ops, undefined, 2));
  // });

  // db.collection('Users').insertOne({
  //   name: 'Franz',
  //   age: 24,
  //   location: 'Davao City'
  // }, (err, result) => {
  //     if(err){
  //       return console.log('Unable to insert user', err);
  //     }
  //
  //     console.log(JSON.stringify(result.ops, undefined, 2));
  //     /* result.ops[0]._id.getTimeStamp() to get timeStamp from objectID that was created by MongoDB */
  // });

  client.close();
});
