import './App.css'
import { useEffect, useState } from 'react'
import Form from './components/Form'
import Header from './components/Header'
import TodoList from './components/TodoList'

const saveTodosToLocalStorage = (todos) => {
  localStorage.setItem('todos', JSON.stringify(todos));
};

const loadTodosFromLocalStorage = () => {
  const savedTodos = localStorage.getItem('todos');
  return savedTodos ? JSON.parse(savedTodos) : [];
};


const App = () => {
  const [todos, setTodos] = useState(loadTodosFromLocalStorage());

  // This useEffect hook is triggered whenever the todos state changes (e.g., when a task is added, completed, or deleted).
  useEffect(() => {
    saveTodosToLocalStorage(todos);
  }, [todos]);

  // Function to add a new todo item
  const addTodo = (text) => {
    setTodos([...todos, { text, completed: false }]);
  };

  // Function to toggle the completed status of a todo item
  const toggleComplete = (index) => {
    // Create a new array by mapping over the existing todos array
    const newTodos = todos.map((todo, i) => (
      // If the current index matches the specified index, toggle the completed status
      i === index ? { ...todo, completed: !todo.completed } : todo
    ));
    // Update the state with the new array
    setTodos(newTodos);
  };

   // Function to delete a todo item
  const deleteTodo = (index) => {
     // Create a new array by filtering out the todo at the specified index
    const newTodos = todos.filter((_, i) => i !== index);
    // Update the state with the new array
    setTodos(newTodos);
  };

  return (
    <>
    <div className="wrapper">
      <Header />
      {/* By passing the addTodo function as a prop, the Form component can call this function to add new todos to the list managed by the App component. */}
      <Form addTodo={addTodo}/> 
      <TodoList 
      todos={todos}
      toggleComplete={toggleComplete}
      deleteTodo={deleteTodo}
      />
    </div> 
    </>
  );
};

export default App;
