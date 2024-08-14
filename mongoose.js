// mongoose.js
const mongoose = require('mongoose');

const uri = "mongodb+srv://Badzin:97223118Ww@cluster0.x20xz.mongodb.net/test?retryWrites=true&w=majority";

mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("Connected to MongoDB with Mongoose"))
  .catch(err => console.error("Connection error:", err));

module.exports = mongoose;
