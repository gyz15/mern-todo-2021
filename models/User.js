const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// User Schema
const UserSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  todoList: [
    {
      type: Schema.Types.ObjectId,
      ref: "Todo",
    },
  ],
});

module.exports = User = mongoose.model("User", UserSchema);
