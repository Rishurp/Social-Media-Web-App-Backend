const mongoose = require("mongoose");

const friendSchema = mongoose.Schema({
  userId: {
    type: String,
    required: true,
  },
  friendId: {
    type: String,
    required: true,
  },
  following: {
    type: Boolean,
  },
});

const Friend = mongoose.model("Friend", friendSchema);

module.exports.Friend = Friend;
