const { User } = require("../models");
const bcrypt = require("bcryptjs");
const ApiError = require("../utils/ApiError");

const getUser = async (id) => {
  // console.log(await User.findById(id));
  return await User.findById(id);
  // console.log("user is created");
};

const getUserByName = async (username) => {
  let user = await User.find({ name: username });
  console.log(username);
  console.log(user);
  return user;
};

const encryptPassword = async (password) => {
  const salt = await bcrypt.genSalt(10);
  const hashPassword = await bcrypt.hash(password, salt);
  return hashPassword;
};

const createUser = async (userInfo) => {
  const { username, email, password } = userInfo;

  // console.log(userInfo);
  if (await User.findOne({ email })) {
    throw new ApiError(200, "Email is already taken.");
  }

  const hashPassword = await encryptPassword(password);
  const userObj = {
    name: username,
    email: email,
    password: hashPassword,
  };
  // const createNewUser = await User.create(userObj);
  // console.log(createNewUser);
  // return createNewUser;
  return await User.create(userObj);
};

const getUserByEmail = async (email) => {
  return await User.findOne({ email });
};

module.exports = {
  getUser,
  createUser,
  getUserByEmail,
  getUserByName,
};
