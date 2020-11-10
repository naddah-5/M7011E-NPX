"use strict";
// Import the system here

//

// This is the control node, set the repeat interval here.
// setInterval(theMainFunction, time interval in ms);


let express = require('express');
//import Express from express;
let app = express();
let port = 3000;

app.get("/", (req, res) => {
    res.send("Welcome to the homepage.");
})

app.listen(port, () => console.log("Listening on port " + port));
