const errorHandler = (err, req, res, next) => {
  let code = 500;
  let msg = "ISE";
  if (err.name == "Data not found") {
    code = 404;
    msg = err.name;
  } else if (err.name == "Invalid Data") {
    code = 400;
    msg = err.msg;
  } else if (err.name == "There's something wrong while updating task") {
    code = 400;
    msg = err.msg;
  }
  res.status(code).json({ error: msg });
};

module.exports = errorHandler;
