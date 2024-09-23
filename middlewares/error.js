const { BaseError } = require("../utils/errors");

module.exports = function (err, req, res, next) {
  if (process.env.NODE_ENV !== "production") console.log(err);

  if (err instanceof BaseError)
    return res.status(err.statusCode).json({ message: err.message });

  res.status(500).json({ message: "Internal Server Error" });
};