const sayHi = (req, res) => {
  res.status(200).send({
    status: "success",
  });
};

module.exports = {
  sayHi,
};
