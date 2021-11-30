const router = require('express').Router();
const testController = require('./controllers/testController');

router.get('/test', (req,res) => {
    res.status(200).send({test:'This is a test'});
});

router.post('/addTest', testController.convertValuesForDB, testController.createTestinDB, testController.createQuestions, (req,res) => {
    res.status(200).send({test:'test was added'});
});

module.exports = router;