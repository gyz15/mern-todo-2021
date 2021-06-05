const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// User Schema
const UserSchema = new Schema({
  username: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  todo_list: [
    {
      type: Schema.Types.ObjectId,
      ref: "todo",
    },
  ],
});

module.exports = User = mongoose.model("User", UserSchema);
