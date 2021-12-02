import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const QuestionAnswer = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    width: 100vw;

    .wrapper {
        width: 33%;
        margin: 10px;
    }

    p {
        text-align: center;
        margin: 5px;
        font-size: 40px;
    }

    input {
        width: 100%;
        height: 40px;
        border: 1px solid black;
        border-radius: 10px;
        margin: 10px;
        padding: 5px;
        font-size: 20px;
    }

`;

const GradeQuestion = ({ question_value, measured_in, converted_to, answer, setAmountCorrect, amountCorrect }) => {

    const [studentAnswer, setStudentAnswer] = useState('')
    const [rightWrong, setRightWrong] = useState('');

    // to determine if setAmountCorrect should be ran
    // if true, should setAmountCorrect and setIsCorrect should be called to increase the amount of questions correct
    // if false, setAmountCorrect and setIsCorrect should NOT be called inorder keep track of the correct amount of correct questions
    const [isCorrect, setIsCorrect] = useState(false);

    // rounds answer to tenths place
    // could be altered to allow the teacher to input what decimal place to round to
    const roundNumber = (num, isGreaterThan = 0.05) => {
        // checks if num can be rounded to tenth decimal place, and rounds if true
        if (parseFloat(num) >= isGreaterThan) return Math.round(10 * num) / 10;

        // handles edge case of num not being able to be rounded to tenth decimal place
        else {
            const splitNum = num.toString().split('');
            // determins where to start while loop
            let index = splitNum.indexOf('.') + 1;
            //value to determine when to exit while loop
            let toNumber = parseInt(splitNum[index]);
            // because we know value is less than 0.05, rounedNumArray sets boilerplate to be returned
            const roundedNumArray = ['0', '.', '0'];
            while (toNumber === 0) {
                // if the next value in splitNum is >= 5, increase the last value of roundedNumArray by 1
                // returns roundedNumArray joined as type Number
                if (parseInt(splitNum[index + 1]) >= 5) {
                    const updatedValue = parseInt(roundedNumArray[roundedNumArray.length - 1]) + 1;
                    roundedNumArray[roundedNumArray.length - 1] = updatedValue.toString();
                    return parseFloat(roundedNumArray.join(''));
                }
                // if next value in splitNum is less than 5, push value to roundedNumArray
                // returns roundedNumArray joined as type Number
                else if (parseInt(splitNum[index + 1]) < 5 && parseInt(splitNum[index + 1]) > 0) {
                    roundedNumArray.push(parseInt(splitNum[index + 1]));
                    return parseFloat(roundedNumArray.join(''));
                }
                // if neither condition is met push 0 into roundedNumArray and increment the index
                roundedNumArray.push('0');
                index++;
            }
        }
    }

    // rounds teacher provided value to be compared to students answer
    const roundedAnswer = roundNumber(answer);

    const checkAnswer = (e) => {
        setStudentAnswer(e.target.value);

        // if input contains letters, do NOT run rest of function, exits checkAnswer and sets RightWrong = Invalid
        const letters = /[a-zA-Z]/i;
        if (letters.test(e.target.value)) return setRightWrong('Invalid');

        // if input is empty, do not display, correct, incorrect, or invalid
        if (e.target.value === '') setRightWrong('');

        //converts e.target.value to a number and compares to the roundedAnswer
        else if (parseFloat(e.target.value) === roundedAnswer) {
            setRightWrong('Correct');
            if (!isCorrect) setAmountCorrect((prev) => prev + 1);
            setIsCorrect(true);
        }
        else {
            setRightWrong('Incorrect');
            //ensures an accurate count of correct questions
            if (isCorrect && amountCorrect > 0) {
                setAmountCorrect((prev) => prev - 1);
                setIsCorrect(false);
            }
        }
    }

    return (
        <QuestionAnswer>
            <div className='wrapper'>
                <p>{`Convert ${question_value} ${measured_in} to ${converted_to}`}</p>
            </div>
            <div className='wrapper'>
                <input placeholder='Enter Student Answer' value={studentAnswer} onChange={checkAnswer} />
            </div>
            <div className='wrapper'>
                <p>{rightWrong}</p>
            </div>
        </QuestionAnswer>
    );
}

export default GradeQuestion;
