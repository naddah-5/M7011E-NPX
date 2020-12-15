"use strict";
// Import the system here
const swaggerUi = require("swagger-ui-express");
const swaggerDocument = require("../openapi.json");
const express = require("express");
const router = require("./api/router");
const cookieParser = require('cookie-parser');
var mongoose = require("mongoose");
require("dotenv").config();

// init config
const port = process.env.SERVER_PORT || 3030;
const uri = process.env.MONGO_URI || "mongodb://localhost:27017/simulator";
const app = express();


mongoose.connect(uri, { 
  "auth": { "authSource": "admin" },
  "user": process.env.MONGO_USER,
  "pass": process.env.MONGO_USER_SECRET,
  useUnifiedTopology: true,
  useNewUrlParser: true })
  .then( () => console.log('connection success'))
  .catch( (err) => console.error(err));

app.use(express.json());
app.use(cookieParser());
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.use("/", router);

app.listen(port, () => console.log("Listening on port " + port));
