const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Content = require("./content");

const chapterSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  contents: [Content.schema],
});

// Export the Chapter model
module.exports =
  mongoose.models.Chapter || mongoose.model("Chapter", chapterSchema);
