import TodoItem from "./TodoItem";

// eslint-disable-next-line react/prop-types
const TodoList = ({ todos, toggleComplete, deleteTodo }) => {
    return (
        <ul style={{ padding: 0, listStyle: 'none' }}>
            {/* The map function is used to iterate over the todos array. For each todo item, it returns a TodoItem component. */}
            {/* eslint-disable-next-line react/prop-types */}
            {todos.map((todo, index) => (
                <TodoItem
                key={index}
                index={index}
                todo={todo}
                toggleComplete={toggleComplete}
                deleteTodo={deleteTodo}
                />
            ))}
        </ul>
    );
};

export default TodoList;