// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/ToDoApp', { useNewUrlParser: true }, (err, client) => {
  if(err){
    return console.log('Unable to connect to MongoDB server');
  };
  console.log('Connected to MongoDB server');
  const db = client.db('ToDoApp');

  // db.collection('Todos').find({
  //   _id: new ObjectID('5bafad396623a227ac49ba73')
  //   }).toArray().then((docs) => {
  //   console.log('Todos');
  //   console.log(JSON.stringify(docs, undefined, 2));
  // }, (err) => {
  //   console.log('Unable to fetch Todos', err);
  // })

  // db.collection('Todos').find().count().then((count) => {
  //   console.log(`Todos count: ${count}`);
  // }, (err) => {
  //   console.log('Unable to fetch Todos', err);
  // })

  db.collection('Users').find({name:'Franz'}).toArray().then((docs) => {
    console.log('Users with name: Franz');
    console.log(JSON.stringify(docs, undefined, 2));
  }, (err) => {
    console.log('Unable to fetch user name');
  });

  // client.close();
});
