"use strict";
// Import the system here

//

// This is the control node, set the repeat interval here.
// setInterval(theMainFunction, time interval in ms);
import dotenv from 'dotenv';
import express from 'express';
//import express from 'express';
//
// init config
dotenv.config();
let app = express();

app.get("/", (req, res) => {
    res.send("Welcome to the homepage.");
})

app.get("/house", (req, res) => {
    res.send("house");
})

app.listen(process.env.SERVER_PORT, () => console.log("Listening on port " + process.env.SERVER_PORT));
