let express = require('express');
//import express from 'express';
var router = express.Router();

const houses = require("./routes/houses");
const powerplant = require("./routes/powerplant");

router.use('/house', houses);
router.use('/powerplant', powerplant);

//export default router;
module.exports = router;
