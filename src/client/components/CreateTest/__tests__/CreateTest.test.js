import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import CreateTest from '../CreateTest';

describe('Create Test Unit Test', () => {

    it('should render a div containing the test form', () => {
        render(<CreateTest/>);
        const testForm = screen.getByTestId('testForm');
        expect(testForm).toBeInTheDocument();
    });

    it('should render test questions', () => {
        render(<CreateTest/>);
        const displayTest = screen.getByTestId('displayTest');
        expect(displayTest).toBeInTheDocument();
    });    
})