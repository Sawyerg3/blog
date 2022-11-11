const mongoose = require("mongoose");

const adminSchema = mongoose.Schema(
  {
    userName: {
      type: String,
      required: [true, "Please add a username"],
    },
    password: {
      type: String,
      required: [true, "Please add a password"],
    },
  },
  {
    timeStamps: true,
  }
);

module.exports = mongoose.model("Admin", adminSchema);
