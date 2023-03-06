const router = require("express").Router();
const task = require("./context/TaskRoute");

router.use("/tasks", task);

module.exports = router;
