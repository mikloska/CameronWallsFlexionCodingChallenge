import React, { useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import NavButton from '../Home/NavButton';

const FormContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 20px;

    input, select {
        min-width: 150px;
        height: 50px;
        border: 1px solid black;
        border-radius: 10px;
        margin: 10px;
        padding: 5px;
        font-size: 20px;
    }

    .wrapper {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    label {
        font-size: 30px;
    }

    p {
        font-size: 20px;
        color: #fa2d17;
        text-align: center;
    }
`;

const Form = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 60%;

    .formDiv {
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 10px;
    }

    @media (max-width: 700px) {
        .formDiv {
            flex-direction: column;
            justify-content: center;
        }
    }
`;

const TestForm = ({ setTest, test, testName, setTestName }) => {

    const [question, setQuestion] = useState('');
    const [units, setUnits] = useState('Fahrenheit');
    const [convertUnits, setConvertUnits] = useState('Fahrenheit');
    const [error, setError] = useState(false);

    const unitsOfTemp = ['Fahrenheit', 'Kelvin', 'Celsius', 'Rankine'];
    const unitsOfVolume = ['Liter', 'Tablespoons', 'Cubic-Inches', 'Cups', 'Cubic-Feet', 'Gallons'];

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

    const createTest = (e) => {
        e.preventDefault();
        //creates object with all data for post request
        const dataToSend = { questions: test, testName: testName }
        console.log('dataToSend', dataToSend)
        // send data to serve to be stored on database
        axios.post('http://localhost:3000/api/addTest', dataToSend)
            .then(res => console.log(res))
            .catch(err => console.log('Error creating test', err));
        setTestName('');
        setTest([]);
        return;
    }

    // commits each question to the current test bank
    const submitQuestion = (e) => {
        e.preventDefault();
        if (units === convertUnits || /[a-zA-Z]/i.test(question)) return setError(true);
        setTest([...test, { number: parseFloat(question), units: units, convertTo: convertUnits }]);
        setQuestion('');
        setError(false);
        return;
    }

    return (
        <FormContainer>
            <div className='wrapper'>
                <label>Test Name:</label>
                <input placeholder='Enter Test Name' value={testName} onChange={(e) => setTestName(e.target.value)} />
            </div>
            <Form onSubmit={submitQuestion}>
                <div className='formDiv'>
                    <div className='wrapper'>
                        <label>Question Value:</label>
                        <input placeholder='Enter Value' value={question} onChange={(e) => setQuestion(e.target.value)} />
                    </div>
                    <div className='wrapper'>
                        <label>Units:</label>
                        <select onChange={(e) => setUnits(e.target.value)}>
                            {[...unitsOfTemp, ...unitsOfVolume].map(unit => <option key={unit} value={unit}>{unit}</option>)}
                        </select>
                    </div>
                    <div className='wrapper'>
                        <label>Convert To:</label>
                        {convertTo()}
                    </div>
                </div>
                {error && <p>Error: Question Value cannot cantain letters. Units and Convert To must be different</p>}
                <NavButton text='Add Conversion' width='200px' height='60px' fontSize='20px' />
            </Form>
            <NavButton text='Submit Test' width='200px' height='60px' fontSize='20px' func={createTest} />
        </FormContainer>
    );
}

export default TestForm;