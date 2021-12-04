import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Home from '../Home';

const MockHome = () => {
    return (
        <BrowserRouter>
            <Home />
        </BrowserRouter>
    );
}

describe('Home Unit Test', () => {

    it('renders NavButton if no test are recieved', async () => {
        render(<MockHome/>);
        const NavButton = await screen.findByText(/Add Test/i);
        expect(NavButton).toBeInTheDocument();
    });

    it('renders Cards', async () => {
        render(<MockHome/>);
        const NavButton = await screen.findAllByTestId('card');
        const numberOfCards = NavButton.length;
        expect(numberOfCards > 0).toBeTruthy();
    });
})