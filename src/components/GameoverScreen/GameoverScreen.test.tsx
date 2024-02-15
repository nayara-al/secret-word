import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import GameoverScreen from "./";

// eslint-disable-next-line react/display-name
jest.mock("../Button", () => ({ buttonType, onClick, children }: any) => (
  <button data-testid="mocked-button" onClick={onClick}>
    {children} - {buttonType}
  </button>
));

describe("GameoverScreen Component", () => {
  test("renders correctly with score and retry function", () => {
    const retryMock = jest.fn();
    const score = 42;

    render(<GameoverScreen retry={retryMock} score={score} />);

    expect(screen.getByText(/infelizmente você perdeu/i)).toBeInTheDocument();
    expect(screen.getByText(`${score} pontos`)).toBeInTheDocument();

    const button = screen.getByTestId("mocked-button");
    expect(button).toBeInTheDocument();
    expect(button).toHaveTextContent("Tentar novamente - primary");

    fireEvent.click(button);
    expect(retryMock).toHaveBeenCalledTimes(1);
  });
});
