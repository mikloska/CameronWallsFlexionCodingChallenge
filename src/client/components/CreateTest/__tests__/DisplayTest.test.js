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

    it('should render text for first question', () => {
        render(<DisplayTest test={testData}/>);
        const questionText = screen.getByText(/1: Convert 10 Fahrenheit to Celsius/i);
        expect(questionText).toBeInTheDocument();
    });

    it('should render text for second question', () => {
        render(<DisplayTest test={testData}/>);
        const questionText = screen.getByText(/2: Convert 60 Cups to Gallons/i);
        expect(questionText).toBeInTheDocument();
    });
})