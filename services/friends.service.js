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

const getFriends = async (id) => {
  let friendsData = await Friend.find({userId : id});
  return friendsData;
}

module.exports = {
  addFriends,
  deleteFriends,
  getFriends
};
