import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import NavBar from '../NavBar';

const MockNavBar = () => {
    return (
        <BrowserRouter>
            <NavBar />
        </BrowserRouter>
    );
}

describe('NavBar Unit Tests', () => {
    it('should render 2 button elements', () => {
        render(<MockNavBar/>);
        const buttonElements = screen.getAllByRole('button');
        expect(buttonElements.length).toBe(2);
    });

    it('should render a Home button', () => {
        render(<MockNavBar/>);
        const buttonElement = screen.getByText(/Home/i);
        expect(buttonElement).toBeInTheDocument();
    });

    it('should render an Add Test button', () => {
        render(<MockNavBar/>);
        const buttonElement = screen.getByText(/Add Test/i);
        expect(buttonElement).toBeInTheDocument();
    });

    it('should contain href to "/"  route', () => {
        render(<MockNavBar/>);
        const buttonElement = screen.getAllByRole('link');
        expect(buttonElement[0]).toHaveAttribute('href', '/');
    });

    it('should contain href to "/createTest"  route', () => {
        render(<MockNavBar/>);
        const buttonElement = screen.getAllByRole('link');
        expect(buttonElement[1]).toHaveAttribute('href', '/createTest');
    });
});