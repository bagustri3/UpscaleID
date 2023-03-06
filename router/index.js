const router = require("express").Router();
const task = require("./context/TaskRoute");

router.use("/task", task);

module.exports = router;
