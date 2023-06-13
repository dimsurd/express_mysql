const logRequest = (req, res, next) => {
  console.log("API Hit: ", req.path);
  next();
};

module.exports = logRequest;
