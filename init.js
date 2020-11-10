"use strict";
// Import the system here

//

// This is the control node, set the repeat interval here.
// setInterval(theMainFunction, time interval in ms);


import express from 'express';
const app = express();
const port = 3000;

app.get("/", (req, res) => {
    res.send("Welcome to the homepage.");
})

app.listen(port, () => console.log("Listening on port " + port));
