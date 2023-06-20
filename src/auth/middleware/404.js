module.exports = (req, res, next) => {
  res.status(404).send({
    code: 404,
    path: req.path,
    message: "Error 404 :Page Not Found",
  });
};
