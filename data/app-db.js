const mongoose = require('mongoose');
assert = require('assert'); 

const url = 'mongodb+srv://jennifercarreno:lolpop09@cluster0.t51esuj.mongodb.net/?retryWrites=true&w=majority';
mongoose.connect(
  url,
  {
    useNewUrlParser: true
  },
  (err) => {
    assert.equal(null, err);
    console.log("Connected successfully to database");

    // db.close(); turn on for testing
  }
);
mongoose.connection.on('error', console.error.bind(console, 'MongoDB connection Error:'));
mongoose.set('debug', true);

module.exports = mongoose.connection;

