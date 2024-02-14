import { render, screen } from "@testing-library/react";
import Button from "./";

describe("Button Component", () => {
  test("renders button with primary style", () => {
    render(<Button buttonType="primary">Click me</Button>);

    // You can add more specific assertions based on your component's structure
    expect(screen.getByRole("button")).toHaveClass("bg-slate-500");
  });

  test("renders button with secondary style", () => {
    render(<Button buttonType="secondary">Click me</Button>);

    // Add assertions for secondary button styling
    expect(screen.getByRole("button")).toHaveClass("bg-rose-950");
  });
});
