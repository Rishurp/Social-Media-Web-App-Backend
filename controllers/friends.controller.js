const { friendService } = require("../services");

const addFriends = async (req, res) => {
  const friendId = req.body;

  const response = await friendService.addFriends(friendId);
  res.send(response).status(200);
};

const deleteFriends = async (req, res) => {
  const friendId = req.params.id;
  const response = await friendService.deleteFriends(friendId);
  res.send(response).status(200);
};

const getFriends = async (req, res) => {
  const userId = req.params.id;
  const friendsData = await friendService.getFriends(userId);

  res.json(friendsData).status(200);
};

module.exports = {
  addFriends,
  deleteFriends,
  getFriends,
};
