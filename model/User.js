const mongoose = require("mongoose"); // using mongoose

const UserSchema = new mongoose.Schema({
    googleId: {
      type: String,
      required: true},
    displayName: { type: String, unique: true },
    email: { type: String, unique: true },
    phone: { type: String, unique: false },
    location: { type:  },
  });

  module.exports = mongoose.model("User", UserSchema);