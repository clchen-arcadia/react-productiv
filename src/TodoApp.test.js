import { render, fireEvent } from "@testing-library/react";
import TodoApp from "./TodoApp";
import {TEST_TODOS} from "./_testCommon.js";


describe("test TodoApp", function () {
  it("renders without crashing", function () {
    const { container } = render(
      <TodoApp
        initialTodos={TEST_TODOS}
      />
    );
  });

  it("matches snapshot", function () {
    const { container } = render(
      <TodoApp
        initialTodos={TEST_TODOS}
      />
    );
    expect(container).toMatchSnapshot();
  });

  it("renders all Todos", function () {
    const { container } = render(
      <TodoApp
        initialTodos={TEST_TODOS}
      />
    );
    expect(container).toHaveTextContent("Make dinner");
    expect(container).toHaveTextContent("Code!");
    expect(container).toHaveTextContent("Go to bed");
  });

  it("renders TodoForm", function () {
    const { container } = render(
      <TodoApp
        initialTodos={TEST_TODOS}
      />
    );
    expect(container.querySelector('.NewTodoForm')).toBeInTheDocument();
  });
});
