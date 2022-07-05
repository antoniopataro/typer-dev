require("dotenv").config();

const mongoose = require("mongoose");
const uri = process.env.DATABASE_URI;

const connection = mongoose.connect(uri, {
  dbName: "backend-test",
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

module.exports = connection;
