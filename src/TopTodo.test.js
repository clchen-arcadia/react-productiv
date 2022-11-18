import { render, fireEvent, getByText } from "@testing-library/react";
import TopTodo from "./TopTodo";
import { TEST_TODOS } from "./_testCommon";

describe("Display correct todo", function () {
  it("can show edit form", function () {
    const { container } = render(<TopTodo todos={TEST_TODOS} />);

    expect(container).toHaveTextContent("Make dinner");
    expect(container).not.toHaveTextContent("Code!");
    expect(container).not.toHaveTextContent("Go to bed");
  });

  it("matches snapshot after displaying correct top todo", function () {
    const { container } = render(<TopTodo todos={TEST_TODOS} />);
    expect(container).toMatchSnapshot();
  });
});
