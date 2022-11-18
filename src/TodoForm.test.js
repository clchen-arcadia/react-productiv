import { render, fireEvent } from "@testing-library/react";
import TodoForm from "./TodoForm";


describe("clicking edit button", function () {
  it("renders without crashing", function () {
    const { container } = render(
      <TodoForm
      />
    );
  });

  it("matches snapshot after displaying edit form", function () {
    const { container } = render(
      <TodoForm
      />
    );
    expect(container).toMatchSnapshot();
  });

  it("renders edit and del buttons", function () {
    const { container } = render(
      <TodoForm
      />
    );

  });
});
