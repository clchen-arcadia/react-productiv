import { render, fireEvent } from "@testing-library/react";
import EditableTodoList from "./EditableTodoList.js";
import {TEST_TODOS} from "./_testCommon.js";

describe("clicking edit button", function () {
  it("renders without crashing", function () {
    const { container } = render(
      <EditableTodoList
        todos={TEST_TODOS}
      />
    );
  });

  it("matches snapshot after displaying edit form", function () {
    const { container } = render(
      <EditableTodoList
        todos={TEST_TODOS}
      />
    );
    expect(container).toMatchSnapshot();
  });

  it("renders edit and del buttons", function () {
    const { container } = render(
      <EditableTodoList
        todos={TEST_TODOS}
      />
    );
    const editBtn = container.querySelector(".EditableTodo-toggle");
    expect(editBtn).toBeInTheDocument();
    const delBtn = container.querySelector(".EditableTodo-delBtn");
    expect(delBtn).toBeInTheDocument();

  });
});
