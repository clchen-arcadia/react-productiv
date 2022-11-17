

App -> Home ->
    TodoList -> List of Todos, edit button renders a todo
    Top Todo -> Todo w/ highest priority
    & Add Form -> Todo Form

App.js

return (
    <div className="App">
        <Home />
    </div>
)

Home
- List of Todos
- Top todo
- Add new todo (form)


Todo
- Props:
    name & description
    uuid
    Function handleEditButton
    Function handleDeleteButton
    Priority Level
- State:
    isDisplayForm (T/F)
    ex. return(
        ...
        {isDisplayForm
        ? <TodoForm />
        : ""}
    )
    Also renders edit & delete button

Form
- Props: optionally accept for initial state
    Initial state = object w/ default values

- State: object with title, description & priority