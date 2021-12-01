import React, { useState } from 'react';
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

    const checkAnswer = (e) => {
        setStudentAnswer(e.target.value);
        if (e.target.value === '') setRightWrong('');
        else if (e.target.value === answer) {
            setRightWrong('Correct');
            setAmountCorrect((prev) => prev + 1);
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
