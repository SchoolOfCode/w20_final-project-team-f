import React from 'react'
import { render, fireEvent } from '@testing-library/react';
import Recipes from './Recipes'


// test search input on recipe component

describe('input value', () => {
    it("updates on change", () => {
        const { queryByPlaceholderText } =
            render(<Recipes />);

        const searchInput = queryByPlaceholderText('Enter ingredient')

        fireEvent.change(searchInput, { target: { value: "pasta" } })

        expect(searchInput.value).toBe("pasta")
    })

});

// test search button on recipe component

describe('Recipes button', () => {
    describe("with empty query", () => {
        it("does not trigger updateSearch function", () => {
            // mock function to see if getSearch is called
            const updateSearch = jest.fn();

            const { queryByTestId } = render(<Recipes updateSearch={updateSearch} />)
            fireEvent.submit(queryByTestId('recipes-button'))

            expect(updateSearch).not.toHaveBeenCalled()

        })
    })
});