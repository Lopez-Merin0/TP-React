import { useState } from 'react';

const Todo = ({ todo, deleteTodo, toggleTodo, editTodo }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [newText, setNewText] = useState(todo.text);

    const handleEdit = () => {
        if (isEditing) {
            if (newText.trim().length < 4) return alert("Mínimo 4 letras");
            editTodo(todo.id, newText);
        }
        setIsEditing(!isEditing);
    };

    return (
        <div className={`todo-card ${todo.completed ? 'completed' : ''}`}>
            <div className="priority-section">
                <input
                    type="range"
                    min="1" max="3" step="1"
                    value={todo.priority}
                    onChange={(e) => changePriority(todo.id, e.target.value)}
                />
                <div className="priority-labels">
                    <span>Baja</span>
                    <span>Media</span>
                    <span>Alta</span>
                </div>
            </div>

            <div className={`status-badge ${todo.completed ? 'done' : 'pending'}`}>
                {todo.completed ? 'REALIZADA' : 'PENDIENTE'}
            </div>

            <div className="card-body">
                {isEditing ? (
                    <textarea
                        value={newText}
                        onChange={(e) => setNewText(e.target.value)}
                        className="edit-textarea"
                    />
                ) : (
                    <p className="todo-text-display">{todo.text}</p>
                )}
            </div>

            {/* Línea divisoria y acciones inferiores */}
            <div className="card-footer">
                <div className="todo-actions-row">
                    <button onClick={() => toggleTodo(todo.id)} className="action-btn check" title="Completar">
                        {todo.completed ? '✅' : '✔️'}
                    </button>

                    <button onClick={() => deleteTodo(todo.id)} className="action-btn delete" title="Eliminar">
                        🗑️
                    </button>

                    <button onClick={handleEdit} className="action-btn edit" title="Editar">
                        {isEditing ? '💾' : '📝'}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Todo;