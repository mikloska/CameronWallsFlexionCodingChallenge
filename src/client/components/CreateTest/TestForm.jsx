import React, { useState } from 'react';
import styled from 'styled-components';
import NavButton from '../Home/NavButton';

const Form = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 50vw;

    .formDiv {
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 10px;
    }
    input, select {
        width: 50%;
        min-width: 100px;
        height: 50px;
        border: 1px solid black;
        border-radius: 10px;
        margin: 10px;
        padding: 5px;
        font-size: 20px;
    }
`;

const TestForm = ({ setTest, test }) => {

    const [question, setQuestion] = useState('');
    const [units, setUnits] = useState('Fahrenheit');
    const [convertUnits, setConvertUnits] = useState('Fahrenheit');

    const unitsOfTemp = ['Fahrenheit', 'Kelvin', 'Celsius', 'Rankine'];

    const unitsOfVolume = ['Leter', 'Tablespoons', 'Cubic-Inches', 'Cups', 'Cubic-Feet', 'Gallons'];

    // conditionally renders select element based on what the initail unit of measure is.
    // ensures the expected response is not to a unit that the input can not be converted to
    const convertTo = () => {
        if (unitsOfTemp.includes(units)) {
            return <select onChange={(e) => setConvertUnits(e.target.value)}>
                {unitsOfTemp.map(unit => <option key={unit} value={unit}>{unit}</option>)}
            </select>
        } else {
            return <select onChange={(e) => setConvertUnits(e.target.value)}>
                {unitsOfVolume.map(unit => <option key={unit} value={unit}>{unit}</option>)}
            </select>
        }
    };

    // commits each question to the test current test bank
    const submitQuestion = (e) => {
        e.preventDefault();
        setTest([...test, { conversionUnit: parseFloat(question), units: units, convertedTo: convertUnits }])
        setQuestion('');
    }

    return (
        <Form onSubmit={submitQuestion}>
            <div className='formDiv'>
                <input placeholder='Enter Value' value={question} onChange={(e) => setQuestion(e.target.value)} />
                <select onChange={(e) => setUnits(e.target.value)}>
                    {[...unitsOfTemp, ...unitsOfVolume].map(unit => <option key={unit} value={unit}>{unit}</option>)}
                </select>
                {convertTo()}
            </div>
            <NavButton text='Add Conversion' width='200px' height='60px' fontSize='20px' />
        </Form>
    );
}

export default TestForm;