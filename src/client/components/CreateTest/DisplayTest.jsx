import React from 'react';
import styled from 'styled-components';

const Display = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 90%;
    margin: 20px;

    label {
        font-size: 30px;
        border-bottom: 1px solid black;
    }
`;

const Question = styled.div`
    display: flex;
    justify-content: space-around;
    p {
        font-size: 30px;
    }
`;

const DisplayTest = ({ test }) => {

    return (
        <Display data-testid='displayTest'>
            <label>Questions:</label>
            {test.map((quest, i) => {
                return (
                    <Question data-testid='question' key={i}>
                        <p>{`${i + 1}: Convert ${quest.number} ${quest.units} to ${quest.convertTo}`}</p>
                    </Question>
                );
            })}
        </Display>
    );
}

export default DisplayTest;