import React from 'react';
import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import NavButton from '../NavButton';

describe('NavButton Unit Tests', () => {
    it('should render a button element', () => {
        render(<NavButton text='Test Button' width={'100px'} height={'75px'} fontSize={'20px'} onClick={jest.fn()}/>);
        const buttonElement = screen.getByRole('button');
        expect(buttonElement).toBeInTheDocument();
    });

    it('should render 1 button element', () => {
        render(<NavButton text='Test Button' width={'100px'} height={'75px'} fontSize={'20px'} onClick={jest.fn()}/>);
        const buttonElement = screen.getAllByRole('button');
        expect(buttonElement.length).toBe(1);
    });

    it('should render a "Test Button" button element', () => {
        render(<NavButton text='Test Button' width={'100px'} height={'75px'} fontSize={'20px'} onClick={jest.fn()}/>);
        const buttonElement = screen.getByText(/Test Button/i);
        expect(buttonElement).toBeInTheDocument();
    });

    it('button should have width of 100px', () => {
        render(<NavButton text='Test Button' width={'100px'} height={'75px'} fontSize={'20px'} onClick={jest.fn()}/>);
        const buttonElement = screen.getByText(/Test Button/i);
        expect(buttonElement).toHaveStyle('width: 100px');
    });

    it('button should have height of 75px', () => {
        render(<NavButton text='Test Button' width={'100px'} height={'75px'} fontSize={'20px'} onClick={jest.fn()}/>);
        const buttonElement = screen.getByText(/Test Button/i);
        expect(buttonElement).toHaveStyle('height: 75px');
    });

    it('button should have font-size of 20px', () => {
        render(<NavButton text='Test Button' width={'100px'} height={'75px'} fontSize={'20px'} onClick={jest.fn()}/>);
        const buttonElement = screen.getByText(/Test Button/i);
        expect(buttonElement).toHaveStyle('font-size: 20px');
    });

    it('button should call onClick when clicked on', () => {
        const testClick = jest.fn();
        render(<NavButton text='Test Button' width={'100px'} height={'75px'} fontSize={'20px'} func={testClick}/>);
        const buttonElement = screen.getByText(/Test Button/i);
        fireEvent.click(buttonElement);
        expect(testClick).toHaveBeenCalledTimes(1);
    });

});
