import React, { useState } from 'react';
import styled from 'styled-components';

const Form = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 50vw;

    input {
        width: 75%;
        min-width: 200px;
        height: 50px;
        border: 1px solid black;
        border-radius: 10px;
        margin: 10px;
    }
`;

const TestForm = ({ setTest, test }) => {

    const [question, setQuestion] = useState('');
    const [answer, setAnswer] = useState('');

    const submitTest = (e) => {
        e.preventDefault();
        setTest([...test, { [question]: answer }])
        setQuestion('');
        setAnswer('');
    }

    return (
        <Form onSubmit={submitTest}>
            <input placeholder='Enter Question' value={question} onChange={(e) => setQuestion(e.target.value)} />
            <input placeholder='Enter Answer' value={answer} onChange={(e) => setAnswer(e.target.value)} />
            <button>Add Question</button>
        </Form>
    );
}

export default TestForm;