import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Card from '../Card';

const MockCard = ({test_id, test_name}) => {
    return (
        <BrowserRouter>
            <Card test_id={test_id} test_name={test_name}/>
        </BrowserRouter>
    );
}

describe('Card Unit Test', () => {
    it('should render card with correct test name displayed', () => {
        render(<MockCard test_id={22} test_name='Example Test'/>);
        const linkElement = screen.getByText(/Example Test/i);
        expect(linkElement).toBeInTheDocument();
    });

    it('should contain an href to /gradeTest/$teamId', () => {
        render(<MockCard test_id={22} test_name='Example Test'/>);
        const linkElement = screen.getByRole('link');
        expect(linkElement).toHaveAttribute('href', '/gradeTest/22');
    });
});