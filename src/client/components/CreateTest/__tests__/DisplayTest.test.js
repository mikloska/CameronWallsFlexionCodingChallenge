import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import DisplayTest from '../DisplayTest';

describe('DisplayTest Unit Tests', () => {

    const testData = [
        {number: 10, units: 'Fahrenheit', convertTo: 'Celsius'},
        {number: 60, units: 'Cups', convertTo: 'Gallons'}
    ];

    it('should render a "Question" label', () => {
        render(<DisplayTest test={testData}/>);
        const labelElement = screen.getByText(/Questions:/i);
        expect(labelElement).toBeInTheDocument();
    });

    it('should render 2 questions', () => {
        render(<DisplayTest test={testData}/>);
        const questions = screen.getAllByTestId('question');
        expect(questions.length).toBe(2);
    });


})