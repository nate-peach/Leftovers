const mongoose = require("mongoose"); // using mongoose

const UserSchema = new mongoose.Schema({
    userName: { type: String, unique: true },
    email: { type: String, unique: true },
    phone: { type: String, unique: false },
    location: { type:  },
  });

  module.exports = mongoose.model("User", UserSchema);