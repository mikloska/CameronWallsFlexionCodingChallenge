import React, { useState } from 'react';
import styled from 'styled-components';
import NavButton from '../Home/NavButton';

const Display = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 50vw;

    input {
        width: 50%;
        min-width: 100px;
        height: 50px;
        border: 1px solid black;
        border-radius: 10px;
        margin: 10px;
        padding: 5px;
        font-size: 20px;
`;

const Question = styled.div`
    display: flex;
    justify-content: space-around;
    p {
        font-size: 30px;
    }
`;

const DisplayTest = ({ test, setTest }) => {

    const [testName, setTestName] = useState('');

    const createTest = (e) => {
        e.preventDefault();
        // send data to serve to be stored on database
        setTestName('');
        setTest([]);
        return;
    }

    return (
        <Display>
            {test.map((quest, i) => {
                return (
                    <Question key={i}>
                        <p>{`Convert ${quest.conversionUnit} ${quest.units} to ${quest.convertedTo}`}</p>
                    </Question>
                )
            })}
            <input placeholder='Enter Test Name' value={testName} onChange={(e) => setTestName(e.target.value)} />
            <NavButton text='Submit Test' width='200px' height='60px' fontSize='20px' func={createTest} />
        </Display>

    );
}

export default DisplayTest;