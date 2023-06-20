"use strict";
require("dotenv").config();
const server = require("./src/auth/server");
const { db } = require("./src/auth/middleware/models/index");
const port = process.env.PORT || 3000;

db.sync().then(() => {
  server.start(port);
});
