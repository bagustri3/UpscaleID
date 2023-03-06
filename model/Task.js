const { getDB, ObjectId } = require("../config/mongodb");

class Task {
  static async create(task) {
    try {
        const collection = getDB().collection("tasks");
        const result = await collection.insertOne(task);
    } catch (error) {
      throw error;
    }
  }
  static async findAll() {
    try {
      const collection = getDB().collection("Tasks");
      const tasks = await collection.find().toArray();
      return tasks;
    } catch (error) {
      throw error;
    }
  }
  static async findOne(id) {
    try {
      const collection = getDB().collection("Tasks");
      const task = await collection.findOne({ _id: ObjectId(id) });
      return task;
    } catch (error) {
      throw error;
    }
  }
  static async update(id, task) {
    try {
        const collection = getDB().collection("Tasks");
        const set = { $set : task };
        const options = { upsert: true };
        const updatedTask = await collection.updateOne({ _id: ObjectId(id) }, set, options )
        console.log(`${updatedTask.matchedCount} document(s) updated.`);
        return updatedTask
    } catch (error) {
      throw error;
    }
  }
  static async delete(id) {
    try {
      const collection = getDB().collection("Tasks");
      const result = await collection.deleteOne({ _id: ObjectId(id) });
      return result;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = Task;