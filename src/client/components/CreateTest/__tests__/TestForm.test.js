import React from 'react';
import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import TestForm from '../TestForm';

describe('TestForm Unit Tests', () => {

    const mockSetTest = jest.fn();
    const mockSetTestName = jest.fn();

    describe('Test Name Form Tests', () => {
        
        it('should render a Test Name: label', () => {
            render(<TestForm setTest={mockSetTest} test={[]} setTestName={mockSetTestName} testName=''/>);
            const testNameLabel = screen.getByText(/Test Name:/i);
            expect(testNameLabel).toBeInTheDocument();
        });

        it('should render a input for test name', () => {
            render(<TestForm setTest={mockSetTest} test={[]} setTestName={mockSetTestName} testName=''/>);
            const testNameInput = screen.getByPlaceholderText(/Enter Test Name/i);
            expect(testNameInput).toBeInTheDocument();
        });

        it('setTestName should be called when input is typed into', () => {
            render(<TestForm setTest={mockSetTest} test={[]} setTestName={mockSetTestName} testName=''/>);
            const testNameInput = screen.getByPlaceholderText(/Enter Test Name/i);
            fireEvent.change(testNameInput, { target: {value: "Test"} })
            expect(mockSetTestName).toHaveBeenCalledTimes(1);
        });

    });

    describe('Input Question Value tests', () => {
        
        it('should render "Question Value:" label', () => {
            render(<TestForm setTest={mockSetTest} test={[]} setTestName={mockSetTestName} testName=''/>);
            const questionValueLabel = screen.getByText(/Question Value:/i);
            expect(questionValueLabel).toBeInTheDocument();
        });

        it('should render an input for entering number to convert', () => {
            render(<TestForm setTest={mockSetTest} test={[]} setTestName={mockSetTestName} testName=''/>);
            const questionValueInput = screen.getByPlaceholderText(/Enter Value/i);
            expect(questionValueInput.value).toBe('');
        });

        it('input value should change when input is typed into', () => {
            render(<TestForm setTest={mockSetTest} test={[]} setTestName={mockSetTestName} testName=''/>);
            const questionValueInput = screen.getByPlaceholderText(/Enter Value/i);
            fireEvent.change(questionValueInput, {target: {value: '10'}});
            expect(questionValueInput.value).toBe('10');
        });

    });

    describe('Select Units tests', () => {

        it('should render "Units:" label', () => {
            render(<TestForm setTest={mockSetTest} test={[]} setTestName={mockSetTestName} testName=''/>);
            const questionValueLabel = screen.getByText(/Units:/i);
            expect(questionValueLabel).toBeInTheDocument();
        });

        it('should render "select" dropdown', () => {
            render(<TestForm setTest={mockSetTest} test={[]} setTestName={mockSetTestName} testName=''/>);
            const questionValueSelect = screen.getByTestId('unitSelector');
            expect(questionValueSelect).toBeInTheDocument();
        });

        it('"select" value should change when onChange fires', () => {
            render(<TestForm setTest={mockSetTest} test={[]} setTestName={mockSetTestName} testName=''/>);
            const questionValueSelect = screen.getByTestId('unitSelector');
            fireEvent.change(questionValueSelect, {target:{value: 'Cups'}})
            expect(questionValueSelect.value).toBe('Cups');
        });

        it('should render "select" dropdown', () => {
            render(<TestForm setTest={mockSetTest} test={[]} setTestName={mockSetTestName} testName=''/>);
            const questionValueOption = screen.getAllByTestId('unitOption');
            expect(questionValueOption.length).toBe(12);
        });
    });

    describe('Convert To tests', () => {

        it('should render "Convert To:" label', () => {
            render(<TestForm setTest={mockSetTest} test={[]} setTestName={mockSetTestName} testName=''/>);
            const convertToLabel = screen.getByText(/Convert To:/i);
            expect(convertToLabel).toBeInTheDocument();
        });

        it('should render Convert To "select" dropdown', () => {
            render(<TestForm setTest={mockSetTest} test={[]} setTestName={mockSetTestName} testName=''/>);
            const convertToSelect = screen.getByTestId('convertSelect');
            expect(convertToSelect).toBeInTheDocument();
        });

        it('"select" value should change when onChange fires', () => {
            render(<TestForm setTest={mockSetTest} test={[]} setTestName={mockSetTestName} testName=''/>);
            const convertToSelect = screen.getByTestId('convertSelect');
            fireEvent.change(convertToSelect, {target:{value: 'Rankine'}})
            expect(convertToSelect.value).toBe('Rankine');
        });
    });

    describe('Form test', () => {

        it('should render a form', () => {
            render(<TestForm setTest={mockSetTest} test={[]} setTestName={mockSetTestName} testName=''/>);
            const formElement = screen.getByTestId('form');
            expect(formElement).toBeInTheDocument();
        });

        it('should render an "Add Conversion" button', () => {
            render(<TestForm setTest={mockSetTest} test={[]} setTestName={mockSetTestName} testName=''/>);
            const buttonElement = screen.getByText(/Add Conversion/i);
            expect(buttonElement).toBeInTheDocument();
        });

        it('should render an "Submit Test" button', () => {
            render(<TestForm setTest={mockSetTest} test={[]} setTestName={mockSetTestName} testName=''/>);
            const buttonElement = screen.getByText(/Submit Test/i);
            expect(buttonElement).toBeInTheDocument();
        });
    })
})