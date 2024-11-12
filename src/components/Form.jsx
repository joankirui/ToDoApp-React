import { useState } from "react";

// eslint-disable-next-line react/prop-types
const Form = ({ addTodo }) => {
  const [newTodo, setNewTodo] = useState('');


  const handleSubmit = (event) => {
    // prevents the form from submitting and reloading the entire app
    event.preventDefault();
    // const todo = event.target.todo.value.trim(); //  The line extracts the value from the input field named todo, trims any whitespace from the input, and assigns it to the constant todo.
    if (newTodo.trim()) {
      addTodo(newTodo.trim());
      setNewTodo('');// clears the input field after adding an item to the todo list
    }

  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
        handleSubmit(event)
    }
  }
  return (
    <form className="form" onSubmit={handleSubmit}>
      <label htmlFor="toDo">
        <input
          type="text"
          name="todo"
          id="todo"
          placeholder="Write your next task"
          onKeyDown={handleKeyDown}
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
        />
      </label>
    </form>
  );
}
export default Form;
