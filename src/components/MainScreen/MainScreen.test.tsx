/* eslint-disable react/display-name */
import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import MainScreen from "./";

jest.mock("../StartScreen", () => ({ startGame }: any) => (
  <div data-testid="start-screen" onClick={startGame}>
    Start Screen
  </div>
));

jest.mock(
  "../GameScreen",
  () =>
    ({
      verifyLetter,
      pickedCategory,
      letters,
      guessedLetters,
      wrongLetters,
      guesses,
      score,
    }: any) =>
      (
        <div data-testid="game-screen" onClick={() => verifyLetter("A")}>
          Game Screen - {pickedCategory} - {letters.join("")} -{" "}
          {guessedLetters.join("")} - {wrongLetters.join("")} - {guesses} -{" "}
          {score}
        </div>
      )
);

jest.mock("../FinishScreen", () => ({ finishGame, score }: any) => (
  <div data-testid="finish-screen" onClick={finishGame}>
    Finish Screen - {score}
  </div>
));

jest.mock("../GameoverScreen", () => ({ retry, score }: any) => (
  <div data-testid="gameover-screen" onClick={retry}>
    Gameover Screen - {score}
  </div>
));

jest.mock(
  "../GameModal",
  () =>
    ({ children, onContinue, onFinish, title, showDialog }: any) =>
      (
        <div
          data-testid="game-modal"
          onClick={() => (showDialog ? onContinue() : onFinish())}
        >
          {children} - {title}
        </div>
      )
);

describe("MainScreen Component", () => {
  test("renders start screen and starts the game", async () => {
    render(<MainScreen />);

    const startScreenElement = screen.getByTestId("start-screen");
    expect(startScreenElement).toBeInTheDocument();

    fireEvent.click(startScreenElement);

    const gameScreenElement = await screen.findByTestId("game-screen");
    expect(gameScreenElement).toBeInTheDocument();
    expect(gameScreenElement).toHaveTextContent("Game Screen");

    expect(screen.queryByTestId("start-screen")).not.toBeInTheDocument();
  });

});
