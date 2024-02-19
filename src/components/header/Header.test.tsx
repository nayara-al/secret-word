import React from 'react';
import { render, screen } from '@testing-library/react';
import Header from '.';

describe('Header Component', () => {
  test('renders correctly', () => {
    render(<Header />);

    const headerElement = screen.getByRole('banner');
    expect(headerElement).toBeInTheDocument();

    const headingElement = screen.getByText(/Palavra Secreta/i);
    expect(headingElement).toBeInTheDocument();
    expect(headingElement).toHaveClass('text-5xl');
    expect(headingElement).toHaveClass('max-md:text-3xl');
    expect(headingElement).toHaveClass('font-bold');
  });
});
