const { getDB, ObjectId } = require("../config/mongodb");

class Task {
  static async create(task) {
    try {
        const collection = getDB().collection("tasks");
        const result = await collection.insertOne(task);
        return result
    } catch (error) {
        console.log(error);
      throw error;
    }
  }
  static async findAll() {
    try {
      const collection = getDB().collection("tasks");
      const tasks = await collection.find().toArray();
      return tasks;
    } catch (error) {
      throw error;
    }
  }
  static async findOne(id) {
    try {
      const collection = getDB().collection("tasks");
      const task = await collection.findOne({ _id: new ObjectId(id) });
      return task;
    } catch (error) {
        console.log(error);
      throw error;
    }
  }
  static async update(id, task) {
    try {
        const collection = getDB().collection("tasks");
        const set = { $set : task };
        const options = { upsert: true };
        const updatedTask = await collection.updateOne({ _id: new ObjectId(id) }, set, options )
        console.log(`${updatedTask.matchedCount} document(s) updated.`);
        return updatedTask
    } catch (error) {
      throw error;
    }
  }
  static async delete(id) {
    try {
      const collection = getDB().collection("tasks");
      const result = await collection.deleteOne({ _id:new ObjectId(id) });
      return result;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = Task;