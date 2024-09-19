const { friendService } = require("../services");

const addFriends = async (req, res) => {
const friendId = req.body;

  const response = await friendService.addFriends(friendId);
  res.send(response).status(200);

};

const deleteFriends =async (req,res) => {
     
    const friendId = req.params.id;
    const response = await friendService.deleteFriends(friendId)
    res.send(response).status(200)
}

module.exports = {
  addFriends,
  deleteFriends
};
