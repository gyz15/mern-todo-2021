const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// User Schema
const TodoSchema = new Schema({
  description: {
    type: String,
    required: true,
  },
  have_due: {
    type: Boolean,
    default: false,
  },
  due_date: {
    type: Date,
  },
  is_daily: {
    type: Boolean,
    default: false,
  },
  owner: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  created_at: {
    type: Date,
    default: Date.now,
  },
  done: {
    type: Boolean,
    default: false,
  },
});

module.exports = Todo = mongoose.model("Todo", TodoSchema);
