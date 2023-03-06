const Task = require("../model/Task");

class TaskController {
  static async create(req, res, next) {
    try {
      const { name, description, status } = req.body;
      const result = await Task.create({ name, description, status });
      if (!result.acknowledged) {
        throw {
          name: "Invalid Data",
          msg: "Error While Inserting data into database",
        };
      }
      console.log(result);
      res
        .status(201)
        .json({ _id: result.insertedId, name, description, status });
    } catch (error) {
      throw error;
    }
  }
  static async find(req, res, next) {
    try {
      const result = await Task.find();
      res.status(200).json(result);
    } catch (error) {
      throw error;
    }
  }
  static async findOne(req, res, next) {
    try {
      const { id } = req.params;
      const result = await Task.findOne(id);
      if (!result) throw { name: "Data not found" };
      res.status(200).json(result);
    } catch (error) {
      throw error;
    }
  }
  static async delete(req, res, next) {
    try {
        const { id } = req.params;
        const find = await Task.findOne(id);
        if(!find) throw { name: "Data not found" };
        const result = await Task.deleteOne(id);
        if(!result.acknowledged) throw { name: "Data not found" };
        res.status(200).json(result);
    } catch (error) {
        throw error
    }
}
static async update(req, res, next) {
    try {
        const { id } = req.params;
        const { name, description, status } = req.body;
        const find = await Task.findOne(id);
        if(!find) throw { name: "Data not found" };
        const result = await Task.updateOne(id, { name, description, status });
        if(!result.acknowledged) throw { name: "There's something wrong while updating task" };
        console.log(result);
        res.status(200).json(result);
    } catch (error) {
        throw error;
    }
}
}

module.exports = TaskController;
