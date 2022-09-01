const mongoose = require("mongoose");

const collectionSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  image: {
    type: String,
    required: true,
    trim: true,
  },
});

const Collection = mongoose.model("Collection", collectionSchema);
module.exports = { Collection, collectionSchema };