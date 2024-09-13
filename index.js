const config = require("./config/config");
const app = require("./app");
const mongoose = require("mongoose");
const { User } = require("./models");

mongoose
  .connect(config.MongoDB)
  .then(() => {
    console.log("MongoDB is connected");

    app.listen(config.port, () => {
      console.log(`Running on Port : ${config.port}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });

// async function createUser() {
//   return await User.create({
//     name: "Rishu",
//     email: "xyz@gmail.com",
//     password: "123456",
//   });
// }

// createUser();
