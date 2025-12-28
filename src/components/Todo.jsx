import { useState } from 'react';

const Todo = ({ todo, deleteTodo, toggleTodo, editTodo }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [newText, setNewText] = useState(todo.text);

    const handleEdit = () => {
        if (isEditing) {
            editTodo(todo.id, newText);
        }
        setIsEditing(!isEditing);
    };

    return (
        <div className={`todo-item ${todo.completed ? 'completed' : ''}`}>
            {isEditing ? (
                <input
                    value={newText}
                    onChange={(e) => setNewText(e.target.value)}
                    className="edit-input"
                />
            ) : (
                <span className="todo-text">{todo.text}</span>
            )}

            <div className="todo-actions">
                <button onClick={() => toggleTodo(todo.id)} title="Completar">
                    {todo.completed ? '☑️' : '⚪'}
                </button>

                <button onClick={handleEdit} title="Editar">
                    {isEditing ? '💾' : '✏️'}
                </button>

                <button onClick={() => deleteTodo(todo.id)} title="Eliminar">
                    🗑️
                </button>
            </div>
        </div>
    );
};

export default Todo;