import { render } from '@testing-library/svelte'

test('Test number', () => {
    const myVariable = 100
    expect(myVariable).toEqual(100)
})
