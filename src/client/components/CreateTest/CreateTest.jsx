import React, { useState } from 'react';
import styled from 'styled-components';
import TestForm from './TestForm';
import DisplayTest from './DisplayTest';

const TestSec = styled.section`
    display: flex;
    justify-content: center;
    width: 100%;

    @media (max-width: 1200px) {
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
`;

const CreateTest = () => {

    const [test, setTest] = useState([]);
    const [testName, setTestName] = useState('');

    return (
        <TestSec>
            <TestForm setTest={setTest} test={test} testName={testName} setTestName={setTestName} />
            <DisplayTest test={test} setTest={setTest} />
        </TestSec>
    )
}

export default CreateTest;