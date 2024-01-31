const userService = require("../service/user.service");

const userCtrl = {
  handleCreate(req, res) {
    const data = req.body;
    console.log("data");
    userService
      ?.create(data)
      .then((result) => {
        res
          .status(200)
          .send({ message: "User created Successfuly", data: result });
      })
      .catch((error) => {
        console.log(error);
        res.status(500).send({ message: "User not created", error });
      });
  },
};

module.exports = userCtrl;
