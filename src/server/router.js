const router = require('express').Router();
const testController = require('./controllers/testController');

router.get('/test', testController.getTests, (req,res) => {
    return res.status(200).json(res.locals.test);
});

router.get('/getTestQuestions/:id', testController.getQuestions, (req, res) => {
    return res.status(200).json(res.locals.questions);
});

router.post('/addTest', testController.convertValuesForDB, testController.createTestinDB, testController.createQuestions, (req,res) => {
    return res.status(200).json(res.locals.id);
});

router.delete('/deleteTest',  testController.deleteQuestion, testController.deleteTest, (req, res) => {
    return res.status(200).send('Test Deleted');
});

module.exports = router;