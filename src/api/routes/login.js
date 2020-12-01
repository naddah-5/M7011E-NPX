"use strict"; 

require('dotenv').config()

let express = require("express");
let jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const credentialFail = 'Username or password incorrect.';

let user = require('../controllers/user')

var router = express.Router();

router.use(express.json());


// Sanity test, use this to verify that everything works up until this point.
router.get('/sanity', (req, res) => {
    res.send('This is a sanity test for log in.')
})

router.get('/', async function(req, res) {
    const username = req.body.username;
    const password = req.body.password;
   
    if (username == null || password == null){
        console.log(credentialFail);
        res.sendStatus(401);
    }
    let match = await user.findOne({username: username});
    let passwordMatch = await bcrypt.compare(password, match.password);
    if(match && passwordMatch){
        let token = jwt.sign({
            username: match.username,
            manager: match.manager,
        }, process.env.JWT_ACCESS_TOKEN,{expiresIn: "60m"});
        // we need to update the cookie with the access token
        if(match.manager){
            res.redirect(); //enter manager route here
        }
        else{
            res.redirect(); //enter prosumer route here
        }
    }
    else{
        console.log(credentialFail);
        res.sendStatus(401); //Unauthorized i.e. incorrect 
    }
})


module.exports = router;