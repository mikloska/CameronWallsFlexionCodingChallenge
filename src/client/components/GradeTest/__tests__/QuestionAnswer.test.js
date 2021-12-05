import React from 'react';
import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import QuestionAnswer from '../QuestionAnswer';

describe('QuestionAnswer Unit Tests', () => {

    const mockSetAmountCorrect = jest.fn();

    it('should render a paragraph containing question to answer', () => {
        render(<QuestionAnswer 
            question_value='10' 
            measured_in='Cups' 
            converted_to='Gallons' 
            answer={'0.625'} 
            setAmountCorrect={mockSetAmountCorrect} 
            amountCorrect={1}
            />
        );
        const question = screen.getByText('Convert 10 Cups to Gallons');
        expect(question).toBeInTheDocument();
    });

    it('should render a input', () => {
        render(<QuestionAnswer 
            question_value='10' 
            measured_in='Cups' 
            converted_to='Gallons' 
            answer={'0.625'} 
            setAmountCorrect={mockSetAmountCorrect} 
            amountCorrect={1}
            />
        );
        const inputElement = screen.getByPlaceholderText(/Enter Student Answer/i);
        expect(inputElement).toBeInTheDocument();
    });

    it('should render a paragraph displaying the correctness of answer', () => {
        render(<QuestionAnswer 
            question_value='10' 
            measured_in='Cups' 
            converted_to='Gallons' 
            answer={'0.625'} 
            setAmountCorrect={mockSetAmountCorrect} 
            amountCorrect={1}
            />
        );
        const correctnessElement = screen.getByTestId('correctness');
        expect(correctnessElement).toBeInTheDocument();
    });

    it('should render "correct" answer response based on if answer is correct, invalid, incorrect', () => {
        render(<QuestionAnswer 
            question_value='10' 
            measured_in='Cups' 
            converted_to='Gallons' 
            answer={'0.625'} 
            setAmountCorrect={mockSetAmountCorrect} 
            amountCorrect={1}
            />
        );
        const inputElement = screen.getByPlaceholderText(/Enter Student Answer/i);
        fireEvent.change(inputElement, {target: {value: '0.6'}})
        const correctnessElement = screen.getByText('Correct');
        expect(correctnessElement).toBeInTheDocument();
    });

    it('should render "Invalid" answer response based on if answer is correct, invalid, incorrect', () => {
        render(<QuestionAnswer 
            question_value='10' 
            measured_in='Cups' 
            converted_to='Gallons' 
            answer={'0.625'} 
            setAmountCorrect={mockSetAmountCorrect} 
            amountCorrect={1}
            />
        );
        const inputElement = screen.getByPlaceholderText(/Enter Student Answer/i);
        fireEvent.change(inputElement, {target: {value: '0.6q'}})
        const correctnessElement = screen.getByText('Invalid');
        expect(correctnessElement).toBeInTheDocument();
    });

    it('should render "Incorrect" answer response based on if answer is correct, invalid, incorrect', () => {
        render(<QuestionAnswer 
            question_value='10' 
            measured_in='Cups' 
            converted_to='Gallons' 
            answer={'0.625'} 
            setAmountCorrect={mockSetAmountCorrect} 
            amountCorrect={1}
            />
        );
        const inputElement = screen.getByPlaceholderText(/Enter Student Answer/i);
        fireEvent.change(inputElement, {target: {value: '1'}})
        const correctnessElement = screen.getByText('Incorrect');
        expect(correctnessElement).toBeInTheDocument();
    });
});