let express = require('express');
let router = express.Router();

router.get('/', (req, res) => {
    res.send('Welcome to the homepage!')
})

router.get('/houses', (req, res) => {
    res.send('These are the available houses.');
})

module.exports  = router;