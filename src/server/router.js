const router = require('express').Router();
const conversions = require('./conversions');

router.get('/test', (req,res) => {
    res.status(200).send({test:'This is a test'});
});

router.post('/addTest', (req,res) => {
    console.log('request', req.body);
    console.log('conversions', conversions.Fahrenheit.Celsius(5))
    res.status(200).send({test:'test was added'});
});

module.exports = router;