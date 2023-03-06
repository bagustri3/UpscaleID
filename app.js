const express = require("express");
const app = express();
const cors = require("cors");
const { mongoConnect } = require("./config/mongodb");
const errorHandler = require("./middlewares/ErrorHandler");
const port = 3000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(errorHandler);

mongoConnect().then(() => {
  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
});
