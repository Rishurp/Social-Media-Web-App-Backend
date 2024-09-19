const { Friend } = require("../models");
const ApiError = require("../utils/ApiError");
const addFriends = async (id) => {
  let friendData = await Friend.create(id);
  return friendData;
};

const deleteFriends = async (id) => {
  let friend = await Friend.findOneAndDelete({ friendId: id });

  return friend;
};

module.exports = {
  addFriends,
  deleteFriends,
};
