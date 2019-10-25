const express = require('express')
const router = express.Router()


router.get('/', function(req, res, next) {
    console.log('мы тут')
    res.render('index');
});

module.exports = router
