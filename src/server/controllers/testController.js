const conversions = require('../utils/conversions');
const async = require('async');
const db = require('../db');

const testController = {};

testController.getTests = async (req, res, next) => {
    try{
        const queryString = 'SELECT * FROM tests;';
        const test = await db.query(queryString);
        res.locals.test = test.rows;
        next();
    }
    catch(err) {
        return next({
            log: 'testController.getTests: ERROR getting tests',
            message: {err: `error in testController.getTests: ${err} ` }
        });
    };
}

testController.getQuestions = async (req, res, next) => {
    try{
        const queryString = 'SELECT * FROM questions WHERE test_id = $1;';
        const questions = await db.query(queryString, [req.query.id]);
        res.locals.questions = questions.rows;
        next()
    }
    catch(err) {
        return next({
            log: 'testController.getQuestions: ERROR fetching test questions',
            message: {err: `error in testController.getQuestions: ${err} ` }
        });
    }
}

testController.convertValuesForDB = (req, res, next) => {
    const {questions} = req.body;
    const convertedQuestions = [];

    // converts given units to desired units
    questions.forEach(quest => {
        const {units, convertTo, number} = quest;
        const answerConverted = conversions[units][convertTo](number);
        convertedQuestions.push({number: number, units: units, convertTo: convertTo, answer: answerConverted});
    });
    res.locals.questions = convertedQuestions;
    return next();
};

testController.createTestinDB = async (req, res, next) => {
    try {
        const {testName} = req.body;
        const queryString = "INSERT INTO tests (test_name) VALUES ($1) RETURNING test_id;";
        const newTest = await db.query(queryString, [testName]);
        res.locals.id = newTest.rows[0].test_id;
        return next();
    }
    catch(err){
        return next({
            log: 'testController.createTestinDB: ERROR adding test name',
            message: {err: `error in testController.createTestinDB: ${err} ` }
        });
    };
};

testController.createQuestions = async (req, res, next) => {
    try {
        const questions = res.locals.questions;
        const queryString = 'INSERT INTO questions (question_value, measured_in, converted_to, answer, test_id) VALUES ($1, $2, $3, $4, $5);';
        await async.each(questions, (question) => {
            db.query(queryString, [question.number, question.units, question.convertTo, question.answer, res.locals.id]);
        });
        next();
    }
    catch(err){
        return next({
            log: 'testController.createQuestions: ERROR adding test questions',
            message: {err: `error in testController.createQuestions: ${err}`}
        }); 
    }
}

// only used to delete row from db after tests are ran for add a test to db.  
testController.deleteQuestion = async (req, res, next) => {
    try {
        const {id} = req.body;
        const questionsQueryString = 'DELETE FROM questions WHERE test_id = $1;';
        const questionResponse = await db.query(questionsQueryString, [id]);
        next();
    }
    catch(err){
        return next({
            log: 'testController.deleteQuestion: ERROR adding test questions',
            message: {err: `error in testController.deleteQuestion: ${err}`}
        });
    }
}

// only used to delete row from db after tests are ran for add a test to db.  
testController.deleteTest = async (req, res, next) => {
    try {
        const {id} = req.body;
        const testQueryString = 'DELETE FROM tests WHERE test_id = $1;';
        const testResponse = await db.query(testQueryString, [id]);
        next();
    }
    catch(err){
        return next({
            log: 'testController.deleteTest: ERROR adding test questions',
            message: {err: `error in testController.deleteTest: ${err}`}
        });
    }
}

module.exports = testController;