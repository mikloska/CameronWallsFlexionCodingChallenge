import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import styled from 'styled-components';
import GradeQuestion from './QuestionAnswer';

const DisplayGradeTest = styled.div`
    display: flex;
    flex-direction: column;
    .score {
        text-align: center;
        font-size: 50px;
        border-bottom: 1px solid black;
    }
`;


const GradeTest = () => {

    const [questions, setQuestions] = useState([]);
    const [amountCorrect, setAmountCorrect] = useState(0);
    const params = useParams();

    useEffect(() => {
        axios.get(`http://localhost:3000/api/getTestQuestions/${params.test_id}`, {
            params: {
                id: params.test_id
            }
        })
            .then(res => setQuestions(res.data))
            .catch(err => console.log(err))
    }, [])
    console.log(questions)
    return (
        <DisplayGradeTest>
            <p className='score'>{`Students Grade: ${(amountCorrect / questions.length) * 100}%`}</p>
            {questions.map(question => {
                return (
                    <GradeQuestion
                        key={question.question_id}
                        question_value={question.question_value}
                        measured_in={question.measured_in}
                        converted_to={question.converted_to}
                        answer={question.answer}
                        setAmountCorrect={setAmountCorrect}
                        amountCorrect={amountCorrect}
                    />
                )
            })}
        </DisplayGradeTest>
    )
}

export default GradeTest;