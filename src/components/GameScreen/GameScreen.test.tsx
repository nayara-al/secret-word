import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import GameScreen from './';

// eslint-disable-next-line react/display-name
jest.mock('../Button', () => ({ buttonType, children }: any) => (
  <button data-testid="mocked-button" onClick={() => {}}>
    {children} - {buttonType}
  </button>
));

describe('GameScreen Component', () => {

  test('handles letter input correctly', () => {
    const verifyLetterMock = jest.fn();
    const { container } = render(<GameScreen verifyLetter={verifyLetterMock} guessedLetters={[]} guesses={3} letters={['A']} pickedCategory="Animals" wrongLetters={[]} score={0} />);

    const input = container.querySelector('input');
    fireEvent.change(input!, { target: { value: 'B' } });

    expect(input!.value).toBe('B');
  });

  test('handles form submission correctly', () => {
    const verifyLetterMock = jest.fn();
    const { container } = render(<GameScreen verifyLetter={verifyLetterMock} guessedLetters={[]} guesses={3} letters={['A']} pickedCategory="Animals" wrongLetters={[]} score={0} />);

    const input = container.querySelector('input');
    fireEvent.change(input!, { target: { value: 'B' } });

    const form = container.querySelector('form');
    fireEvent.submit(form!);

    expect(verifyLetterMock).toHaveBeenCalledWith('B');

    expect(input!.value).toBe('');
  });

});
