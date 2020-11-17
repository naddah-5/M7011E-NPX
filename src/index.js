"use strict";
// Import the system here

//

// This is the control node, set the repeat interval here.
// setInterval(theMainFunction, time interval in ms);
import dotenv from 'dotenv';

//toggle between these two as needed, seems like it's different depending on the ES6 version.
const express = require('express');
//import express from 'express';

const url = require('url');
const houses = require("./api/routes/houses");

//
// init config
dotenv.config();
const app = express();

app.use(express.json());
// we use houses.js to handle all endpoints 
//that start with /houses
app.use("/houses", houses);

app.get("/", (req, res) => {
    res.send("Welcome to the homepage.");
})

app.listen(process.env.SERVER_PORT, () => console.log("Listening on port " + process.env.SERVER_PORT));

// for testing on local machine.
//let port = 3000;
//app.listen(port, () => console.log("Currently running on local host: port " + port));