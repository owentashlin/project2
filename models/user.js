const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    name: String,
    googleId: {
      type: String,
      required: true,
    },
    email: String,
    avatar: String,
    projects: [{type: mongoose.Schema.Types.ObjectId, ref:'Project'}],
    stash: [{type: mongoose.Schema.Types.ObjectId, ref:'Stash'}]
  },
  { timeStamps: true }

);

module.exports = mongoose.model("User", userSchema);