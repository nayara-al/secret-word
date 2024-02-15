/* eslint-disable react/display-name */
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import StartScreen from './';

jest.mock('../Button', () => ({ buttonType, onClick, children }: any) => (
  <button data-testid="mocked-button" onClick={onClick}>
    {children} - {buttonType}
  </button>
));

describe('StartScreen Component', () => {
  test('renders correctly and calls startGame on button click', () => {
    const startGameMock = jest.fn();

    render(<StartScreen startGame={startGameMock} />);

    const textElement = screen.getByText(/Clique no botão abaixo para começar a jogar/i);
    expect(textElement).toBeInTheDocument();

    const buttonElement = screen.getByTestId('mocked-button');
    expect(buttonElement).toBeInTheDocument();
    expect(buttonElement).toHaveTextContent('Iniciar o jogo - primary');

    fireEvent.click(buttonElement);

    expect(startGameMock).toHaveBeenCalledTimes(1);
  });
});
