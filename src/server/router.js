const router = require('express').Router();
const testController = require('./controllers/testController');

router.get('/test', testController.getTests, (req,res) => {
    res.status(200).json(res.locals.test);
});

router.get('/getTestQuestions/:id', testController.getQuestions, (req, res) => {
    res.status(200).json(res.locals.questions);
});

router.post('/addTest', testController.convertValuesForDB, testController.createTestinDB, testController.createQuestions, (req,res) => {
    res.status(200).json(res.locals.id);
});

module.exports = router;