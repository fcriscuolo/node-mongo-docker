const mongoose = require('mongoose');

mongoose.connect('mongodb://mongodb/mydatabase')
    .then(db => console.log('Db está conectada a ', db.connection.host))
    .catch(err => console.error(err));


/*
//Set up default mongoose connection
var mongoDB = 'mongodb://127.0.0.1/my_database';
mongoose.connect(mongoDB, { useNewUrlParser: true });
 //Get the default connection
var db = mongoose.connection;
//Bind connection to error event (to get notification of connection errors)
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
*/