const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const contentSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  video_url: {
    type: String,
    required: true,
  },
  overview: String,
});

module.exports =
  mongoose.models.Content || mongoose.model("Content", contentSchema);
