const mongoose = require("mongoose");

const postSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
    // date: {
    //   type: Date,
    //   default: new Date(),
    //   // required: true,
    // },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Post", postSchema);
