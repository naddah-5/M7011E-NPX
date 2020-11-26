"use strict";
// Import the system here

const express = require("express");
const router = require("./api/router");
var mongoose = require("mongoose");
require("dotenv").config();

// init config
const port = process.env.SERVER_PORT || 3030;
const uri = process.env.MONGO_URI;
const app = express();

router.use(express.json());

mongoose.connect(uri, { 
  "auth": { "authSource": "admin" },
  "user": process.env.MONGO_ADMIN,
  "pass": process.env.MONGO_ADMIN_SECRET,
  useUnifiedTopology: true,
  useNewUrlParser: true })
  .then( () => console.log('connection success'))
  .catch( (err) => console.error(err));

app.use(express.json());

app.use("/", router);

app.listen(port, () => console.log("Listening on port " + port));
