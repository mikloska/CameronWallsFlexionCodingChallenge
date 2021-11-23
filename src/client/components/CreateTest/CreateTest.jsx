import React, { useState } from 'react';
import styled from 'styled-components';
import TestForm from './TestForm';
import DisplayTest from './DisplayTest';

const TestSec = styled.section`
    display: flex;
`;

const CreateTest = () => {

    const [test, setTest] = useState([]);

    return (
        <TestSec>
            <TestForm setTest={setTest} test={test} />
            <DisplayTest test={test} />
        </TestSec>
    )
}

export default CreateTest;