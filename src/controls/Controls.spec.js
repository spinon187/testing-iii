// Test away!
import React from 'react';
import { render, fireEvent } from 'react-testing-library';
import Controls from './Controls';
 

describe('toggleLocked()', () => {
    it('toggles the lock', () => {
        const toggleLocked = jest.fn();
        const {getByText} = render(<Controls toggleLocked={toggleLocked}/>);
        fireEvent.click(getByText(/Lock Gate/i));
        expect(toggleLocked).toHaveBeenCalled();
    })
})

describe('toggleClosed()', () => {
    it('opens or closes the gate', () => {
        const toggleClosed = jest.fn();
        const {getByText} = render(<Controls toggleClosed={toggleClosed}/>);
        const button = getByText(/Close Gate/i);
        fireEvent.click(button);
        expect(toggleClosed).toHaveBeenCalled();
    })
})