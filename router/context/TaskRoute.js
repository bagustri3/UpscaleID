const TaskController = require("../../controller/TaskController");

const task = require("express").Router();

task.post("/", TaskController.create);
task.get("/", TaskController.find);
task.get("/:id", TaskController.findOne);
task.put("/:id", TaskController.update);
task.delete("/:id", TaskController.delete);

module.exports = task;
