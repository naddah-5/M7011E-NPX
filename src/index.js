"use strict";
// Import the system here

//

// This is the control node, set the repeat interval here.
// setInterval(theMainFunction, time interval in ms);
import dotenv from 'dotenv';

//toggle between these two as needed, seems like it's different depending on the ES6 version.
let express = require('express');
//import express from 'express';

let url = require('url');

//
// init config
dotenv.config();
let app = express();

app.get("/", (req, res) => {
    res.send("Welcome to the homepage.");
})

app.get("/houses", (req, res) => {
    res.send("houses");
})


app.listen(process.env.SERVER_PORT, () => console.log("Listening on port " + process.env.SERVER_PORT));

// for testing on local machine.
//let port = 3000;
//app.listen(port, () => console.log("Currently running on local host: port " + port));