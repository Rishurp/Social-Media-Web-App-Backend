const mongoose = require("mongoose");

const friendSchema = mongoose.Schema({
  friendId: {
    type: String,
    required: true,
  },
});

const Friend = mongoose.model("Friend", friendSchema);

module.exports.Friend = Friend;
