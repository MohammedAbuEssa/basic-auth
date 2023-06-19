"use strict";
require("dotenv").config();
let port = process.env.PORT || 3000;
const app = require("./src/server");
const { db } = require("./src/models/index");
db.sync().then(() => {
  app.start(port);
});
