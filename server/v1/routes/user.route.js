const router = require("express").Router();
const { handleCreate } = require("../controllers/user.controller");

router.post("/", handleCreate);

module.exports = router;
