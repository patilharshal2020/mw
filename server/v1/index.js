const router = require("express").Router();

require("./model/db");
router.use("/users", require("./routes/user.route"));

module.exports = router;
