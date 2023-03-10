const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const acceptanceSchema = new Schema({ acceptedWith: {type: String, default: ""} }, { timestamps: true });

const userSchema = new Schema({
  id: {
    type: String,
    index: true
  },
  name: {
    type: String,
  },

  acceptance: acceptanceSchema,

  receivedAcceptances: [{type: String}],

  gender: {
    type: String,

  },

  password: {
    type: String,
  },

  phone: {
    type: String,
    index: true,
  },
  favourites: {
    type: String,

  },
  generalStatus: {
    type: String,

  },
  historyInfo: {
    type: String,

  },
  relatedWith: {
    type: String,
  },
  isBlocked: {
    type: Boolean,
    default: false,
  },
  questionsList: [{
    type: Map,
    of: String,
    default: {}
  }],
  createdAt: {
    type: Date,
    default: Date.now,
  },

});

module.exports = mongoose.model("User", userSchema);