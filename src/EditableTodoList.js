import React from "react";
import EditableTodo from "./EditableTodo";

/** Show list of editable todos.
 *
 * Props:
 * - todos: array of [ todo, ... ]
 * - update(): fn to call to update a todo
 * - remove(): fn to call to remove a todo
 *
 * TodoApp -> EditableTodoList -> [ EditableTodo, ... ]
 */

function EditableTodoList({ todos, update, remove }) {
  console.log("EditableTodoList rendered with props", todos, update, remove);
  
  return (
    <div className="EditableTodoList">
      {todos.map((t) => (
        <EditableTodo todo={t} update={update} remove={remove} key={t.id}/>
      ))}
    </div>
  );
}

export default EditableTodoList;
