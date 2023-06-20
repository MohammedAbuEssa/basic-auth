module.exports = (error, req, res, next) => {
  res.status(500).send({
    code: 500,
    path: req.path,
    message: `Error 505 : ${error.message}`,
  });
};
