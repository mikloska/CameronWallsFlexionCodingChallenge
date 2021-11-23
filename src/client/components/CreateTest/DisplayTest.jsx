import React from 'react';
import styled from 'styled-components';

const Display = styled.section`
    display: flex;
    flex-direction: column;
    width: 50vw;
`;

const Question = styled.div`
    display: flex;
    justify-content: space-around;

`;

const DisplayTest = ({ test }) => {
    return (
        <Display>
            {test.map((quest, i) => {
                return (
                    <Question key={i}>
                        <p>{Object.keys(quest)[0]}</p>
                        <p>{Object.values(quest)[0]}</p>
                    </Question>
                )
            })}
        </Display>
    );
}

export default DisplayTest;