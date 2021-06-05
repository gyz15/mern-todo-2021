const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// User Schema
const TodoSchema = new Schema({
  created_at: {
    type: Date,
    default: Date.now,
  },
  have_due: {
    type: Boolean,
    default: false,
  },
  due_date: {
    type: Date,
  },
  done: {
    type: Boolean,
    default: false,
  },
  is_daily_routine: {
    type: Boolean,
    default: false,
  },
  owner: {
    type: Schema.Types.ObjectId,
    ref: "user",
  },
});

module.exports = Todo = mongoose.model("Todo", TodoSchema);
