import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import FinishScreen from './';

describe('FinishScreen component', () => {
  it('renderiza corretamente com pontuação e botão', () => {
    const finishGameMock = jest.fn();
    const score = 100;

    render(<FinishScreen finishGame={finishGameMock} score={score} />);

    expect(screen.getByText(`Parabéns, você fez ao total ${score} pontos!`)).toBeInTheDocument();

    expect(
      screen.getByText('Esperamos que tenha se divertido, volte novamente outras vezes!')
    ).toBeInTheDocument();

    expect(screen.getByRole('button', { name: 'Ir para tela inicial' })).toBeInTheDocument();
  });

  it('chama a função finishGame ao clicar no botão', () => {
    const finishGameMock = jest.fn();
    const score = 100;

    render(<FinishScreen finishGame={finishGameMock} score={score} />);

    fireEvent.click(screen.getByRole('button', { name: 'Ir para tela inicial' }));

    expect(finishGameMock).toHaveBeenCalledTimes(1);
  });
});
