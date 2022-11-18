import { render, fireEvent } from "@testing-library/react";
import Todo from "./Todo";

it("renders without crashing", function () {
  const { container } = render(
    <Todo
      todo={{ id: 1, title: "TEST", description: "Testing", priority: 1 }}
    />
  );
});

it("contains expected term", function () {
  const result = render(
    <Todo
      todo={{ id: 1, title: "TEST", description: "Testing", priority: 1 }}
    />
  );
  expect(result.queryByText("TEST")).toBeInTheDocument();
  expect(result.queryByText("Testing")).toBeInTheDocument();
});

it("matches snapshot", function () {
  const { container } = render(
    <Todo
      todo={{ id: 1, title: "TEST", description: "Testing", priority: 1 }}
    />
  );
  expect(container).toMatchSnapshot();
});
