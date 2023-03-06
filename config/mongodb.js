if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

const { MongoClient, ObjectId } = require("mongodb");

const uri = process.env.MONGODB_URI;

const client = new MongoClient(uri);
let db = null;

async function mongoConnect() {
  try {
    db = client.db("upscaleid");
    return db;
  } catch (error) {
    console.log(error);
  }
}

const getDB = () => {
  return db;
};

module.exports  = { mongoConnect, getDB, ObjectId };