import { render, fireEvent } from "@testing-library/react";
import EditableTodo from "./EditableTodo";

describe("clicking edit button", function () {
  it("can show edit form", function () {
    const { container } = render(
      <EditableTodo
        todo={{ id: 1, title: "TEST", description: "Testing", priority: 1 }}
      />
    );

    const editBtn = container.querySelector(".EditableTodo-toggle");

    fireEvent.click(editBtn);
    expect(editBtn).not.toBeInTheDocument();
  });

  it("matches snapshot after displaying edit form", function () {
    const { container } = render(
      <EditableTodo
        todo={{ id: 1, title: "TEST", description: "Testing", priority: 1 }}
      />
    );
    fireEvent.click(container.querySelector(".EditableTodo-toggle"));
    expect(container).toMatchSnapshot();
  });
});
