const userModel = require("../model/user.model");

const userService = {
  async create(user) {
    if (Array.isArray(user)) user = [user];

    const result = await userModel.insertMany(user);
    return;
    result;
  },
};

module.exports = userService;
