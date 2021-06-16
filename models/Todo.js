const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// User Schema
const TodoSchema = new Schema({
  description: {
    type: String,
    required: true,
  },
  haveDue: {
    type: Boolean,
    default: false,
  },
  dueDate: {
    type: Date,
  },
  isDaily: {
    type: Boolean,
    default: false,
  },
  owner: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  done: {
    type: Boolean,
    default: false,
  },
});

module.exports = Todo = mongoose.model("Todo", TodoSchema);
