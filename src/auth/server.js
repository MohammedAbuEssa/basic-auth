"use strict";
const express = require("express");
const app = express();
const userRouter = require("./auth/routes/user.route");
const error404Handler = require("./middleware/404");
const error500Handler = require("./middleware/500");
app.use(express.json());
app.use(userRouter);

app.use(error404Handler);
app.use(error500Handler);
function start(port) {
  app.listen(port, () => {
    console.log(`server is running in port : ${port}`);
  });
}

module.exports = {
  app: app,
  start: start,
};
