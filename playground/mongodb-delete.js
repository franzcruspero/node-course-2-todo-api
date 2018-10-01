// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/ToDoApp', { useNewUrlParser: true }, (err, client) => {
  if(err){
    return console.log('Unable to connect to MongoDB server');
  };
  console.log('Connected to MongoDB server');
  const db = client.db('ToDoApp');

// deleteMany
// db.collection('Todos').deleteMany({text:'Go to meeting @ 2:30 pm'}).then((result) => {
//   console.log(result);
// });

//deleteOne
// db.collection('Todos').deleteOne({text:'finish node course'}).then((result) => {
//   console.log(result);
// })
//findOneAndDelete
// db.collection('Todos').findOneAndDelete({completed: false}).then((result) => {
//   console.log(result);
// });
  // client.close();

  // db.collection('Users').deleteMany({name:'Franz'}).then((result) => {
  //   console.log(result);
  // });

  db.collection('Users').findOneAndDelete({_id: new ObjectID('5bafaf3adc650228b5836c64')}).then((result) => {
    console.log(result);
  });

});
