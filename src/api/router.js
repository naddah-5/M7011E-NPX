let express = require('express');
//import express from 'express';
var router = express.Router();
const houses = require("./routes/houses")

router.get('/', (req, res) => {
    res.send('Welcome to the Routes!')
})

router.use('/house', houses);

//export default router;
module.exports = router;
