import React from "react";

import Todo from "./Todo";

/** Shows the top todo, from list of todos. In the case of undefined or empty list,
 *  function returns null.
 *
 * Props:
 * - todos
 *
 * TodoApp -> TopTodo
 */

function TopTodo({ todos=[] }) {
  console.log("TopTodo is rendered with props", todos)

  if(todos.length === 0 ) return null;

  // lowest-priority # is the highest priority, favoring earliest in the array
  let top = todos.reduce(
      (acc, cur) => cur.priority < acc.priority ? cur : acc, todos[0]);

  return <Todo todo={top}/>;
}

export default TopTodo;
