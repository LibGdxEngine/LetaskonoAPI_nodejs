const mongoose = require("mongoose");
const Schema = mongoose.Schema;
 
const questionSchema = new Schema({
  id: {
    type: String,
    index: true,
  },
  question: {
    type: String,
  },
  answer: {
    type: String,
    default: ""
  },
  note: {
    type: String,
    default: ""
  }
});
 
module.exports = mongoose.model("Question", questionSchema);