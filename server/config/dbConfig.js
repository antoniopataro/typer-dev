const mongoose = require("mongoose");

require("dotenv").config();
const uri = process.env.DATABASE_URI;

const connection = mongoose.connect(uri, {
  dbName: "backend-test",
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

module.exports = connection;
