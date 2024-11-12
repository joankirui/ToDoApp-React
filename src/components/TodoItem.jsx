// eslint-disable-next-line react/prop-types
const TodoItem = ({ todo, index, toggleComplete, deleteTodo }) => {
    return (
        <li
        onClick={() => toggleComplete(index)}
        style={{
            // eslint-disable-next-line react/prop-types
            textDecoration: todo.completed ? 'line-through' : 'none',
            // eslint-disable-next-line react/prop-types
            backgroundColor: todo.completed ? '#95a5a6' : '#2c3e50',
            color: 'white',
            margin: '10px 0',
            padding: '10px',
            borderRadius: '4px',
            cursor: 'pointer',
            display: 'flex',
            justifyContent: 'space-between'
        }}
        >
            {/* eslint-disable-next-line react/prop-types */}
            {todo.text}
            <button onClick={(e) => {
                e.stopPropagation(); // Prevent toggling when clicking the delete button
                deleteTodo(index);
            }} style={{ marginLeft: '20px', cursor: 'pointer' }}>Delete</button>
        </li>
    )
    
}

export default TodoItem;

