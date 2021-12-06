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
        const loading = await screen.findByText(/Loading.../i);
        expect(loading).toBeInTheDocument();
    });

    it('renders Cards', async () => {
        render(<MockHome/>);
        const NavButton = await screen.findAllByTestId('card');
        const numberOfCards = NavButton.length;
        expect(numberOfCards > 0).toBeTruthy();
    });
})