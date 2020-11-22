let express = require('express');
//import express from 'express';
var router = express.Router();
const houses = require("./routes/houses")

router.use('/house', houses);

//export default router;
module.exports = router;
