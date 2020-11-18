"use strict";
// Import the system here

// This is the control node, set the repeat interval here.
// setInterval(theMainFunction, time interval in ms);

const express = require('express');
const router = require('./api/router')
var mongoose = require("mongoose");
require('dotenv').config();

// init config
const port = process.env.SERVER_PORT || 3030; 
const app = express();

mongoose.connect(process.env.MONGO_URI, {
  useUnifiedTopology: true,
  useNewUrlParser: true
});

mongoose.connection.once("open", function() {
  console.log("mongo online")
});

app.use(express.json());

app.use("/", router);

app.listen(port, () => console.log("Listening on port " + port));
