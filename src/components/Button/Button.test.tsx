import React from 'react';
import { render } from '@testing-library/react';

import { Button } from './Button';

describe('components/Button', () => {
    it('renders without crashing', () => {
        const { getByText } = render(<Button label='Test Button' />);

        expect(getByText('Test Button')).toBeInTheDocument();
        expect(getByText('Test Button')).toHaveClass('button--medium');
        expect(getByText('Test Button')).toHaveClass('button--primary');
        expect(getByText('Test Button')).toHaveAttribute('type', 'button');
    });

    it('onClick is called when button is clicked', () => {
        const onClick = jest.fn();

        const { getByText } = render(<Button label='Test Button' onClick={onClick} />);

        // onClick should not be called yet
        expect(onClick).toHaveBeenCalledTimes(0);

        // Click the button
        getByText('Test Button').click();

        // onClick should be called once
        expect(onClick).toHaveBeenCalledTimes(1);
    });

    it('renders loading text when loading is true', () => {
        const { getByText } = render(<Button label='Test Button' loading />);

        // Loading text should be rendered
        expect(getByText('Loading...')).toBeInTheDocument();
    });

    it('renders disabled button when disabled is true', () => {
        const { getByText } = render(<Button label='Test Button' disabled />);

        // Button should be disabled
        expect(getByText('Test Button')).toBeDisabled();
    });

    it('renders small button when size is small', () => {
        const { getByText } = render(<Button label='Test Button' size='small' />);

        // Button should have small class
        expect(getByText('Test Button')).toHaveClass('button--small');
    });

    it('renders secondary button when variant is secondary', () => {
        const { getByText } = render(<Button label='Test Button' variant='secondary' />);

        // Button should have secondary class
        expect(getByText('Test Button')).toHaveClass('button--secondary');
    });

    it('renders button with type submit when type is submit', () => {
        const { getByText } = render(<Button label='Test Button' type='submit' />);

        // Button should have type submit
        expect(getByText('Test Button')).toHaveAttribute('type', 'submit');
    });

    it('renders button with custom data attribute when data attribute is provided', () => {
        const { getByText } = render(<Button label='Test Button' data-testid='custom-data' />);

        // Button should have custom data attribute
        expect(getByText('Test Button')).toHaveAttribute('data-testid', 'custom-data');
    });
});
