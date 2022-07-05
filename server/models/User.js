const mongoose = require("mongoose");

const bcrypt = require("bcrypt");

const User = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
  },
  password: {
    type: String,
    required: true,
    select: false,
  },
  picture: {
    type: String,
    required: false,
  },
  scores: [
    {
      accuracy: {
        type: Number,
      },
      elapsedTime: {
        type: String,
      },
      errors: {
        type: Number,
      },
      wpm: {
        type: Number,
      },
    },
  ],
});

User.pre("save", async function (next) {
  const hash = await bcrypt.hash(this.password, 10);
  this.password = hash;

  next();
});

module.exports = mongoose.model("User", User);
