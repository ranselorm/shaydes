const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const commentSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: String,
});

module.exports =
  mongoose.models.Course || mongoose.model("Comment", commentSchema);
