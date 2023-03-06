const errorHandler = (err, req, res, next) => {
  let code = 500;
  let msg = "ISE";
  if (err.name == "Data Not Found") {
    code = 404;
    msg = err.name;
  } else if (err.name == "Unauthorized") {
    code = 401;
    msg = err.name;
  }
};


module.exports = errorHandler;