import React, { useState } from "react";
import { v4 as uuid } from "uuid";

import TopTodo from "./TopTodo";
import EditableTodoList from "./EditableTodoList";
import TodoForm from "./TodoForm.js";

/** App for managing a todo list.
 *
 * Props:
 * - initialTodos: possible array of [ todo, ... ]
 *
 * State:
 * - todos: array of [ todo, ... ]
 *
 * App -> TodoApp -> { TodoForm, EditableTodoList, TopTodo }
 */

function TodoApp({ initialTodos = [] }) {
  console.log("TodoApp renders with props:", initialTodos);

  const [todos, setTodos] = useState(initialTodos);

  console.log("TodoApp rendered with states:", todos);

  /** add a new todo to list */
  function create(newTodo) {
    setTodos(() => [...todos, {...newTodo, id: uuid()}]);
  }

  /** update a todo with updatedTodo */
  function update(updatedTodo) {
    const newTodos = todos.map((t) =>
      t.id === updatedTodo.id ? {...t, ...updatedTodo} : t
    );
    setTodos(() => newTodos);
  }

  /** delete a todo by id */
  function remove(id) {
    const newTodos = todos.filter((t) => t.id !== id);
    setTodos(() => newTodos);
  }

  return (
    <main className="TodoApp">
      <div className="row">
        <div className="col-md-6">
          {
            todos.length > 0
            ? <EditableTodoList
                todos={todos}
                update={update}
                remove={remove}
              />
            : <span className="text-muted">You have no todos.</span>
          }
        </div>

        <div className="col-md-6">
          { todos.length > 0 &&
          <section className="mb-4">
            <h3>Top Todo</h3>
            <TopTodo todos={todos} />
          </section>
          }
          <section>
            <h3 className="mb-3">Add Nü</h3>
            <TodoForm handleSave={create} />
          </section>
        </div>
      </div>
    </main>
  );
}

export default TodoApp;
