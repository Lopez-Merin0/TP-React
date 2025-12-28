import { useState } from 'react';

const Todo = ({ todo, deleteTodo, toggleTodo, editTodo }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [tempText, setTempText] = useState(todo.text);
    const [tempPriority, setTempPriority] = useState(todo.priority);

    const handleSave = () => {
        if (tempText.trim().length < 4) return alert("Mínimo 4 caracteres");
        editTodo(todo.id, tempText, tempPriority);
        setIsEditing(false);
    };

    return (
        <div className={`todo-card ${todo.completed ? 'completed' : ''}`}>
            <div className="priority-section">
                <div className="tooltip-container slider-tooltip">
                    <input
                        type="range" min="1" max="3" step="1"
                        value={isEditing ? tempPriority : todo.priority}
                        onChange={(e) => setTempPriority(Number(e.target.value))}
                        disabled={!isEditing}
                    />
                    <span className="tooltip-text priority-tip">
                        Prioridad: {tempPriority == 1 ? 'Baja' : tempPriority == 2 ? 'Media' : 'Alta'}
                    </span>
                </div>
                <div className="priority-labels">
                    <span>Baja</span><span>Media</span><span>Alta</span>
                </div>
            </div>

            <div className={`status-badge ${todo.completed ? 'done' : 'pending'}`}>
                ● {todo.completed ? 'REALIZADA' : 'PENDIENTE'}
            </div>

            <div className="card-body">
                {isEditing ? (
                    <textarea
                        value={tempText}
                        onChange={(e) => setTempText(e.target.value)}
                        className="edit-textarea"
                    />
                ) : (
                    <p className="todo-text-display">{todo.text}</p>
                )}
            </div>

            <div className="card-footer">
                <div className="todo-actions-row">
                    {isEditing ? (
                        <>
                            <div className="tooltip-container">
                                <button onClick={handleSave} className="action-btn">💾</button>
                                <span className="tooltip-text save-tip">Guardar</span>
                            </div>
                            <div className="tooltip-container">
                                <button onClick={() => setIsEditing(false)} className="action-btn">❌</button>
                                <span className="tooltip-text cancel-tip">Cancelar</span>
                            </div>
                        </>
                    ) : (
                        <>
                            <div className="tooltip-container">
                                <button onClick={() => toggleTodo(todo.id)} className="action-btn">✅</button>
                                <span className="tooltip-text complete-tip">Completar</span>
                            </div>
                            <div className="tooltip-container">
                                <button onClick={() => setIsEditing(true)} className="action-btn">📝</button>
                                <span className="tooltip-text edit-tip">Editar</span>
                            </div>
                            <div className="tooltip-container">
                                <button onClick={() => deleteTodo(todo.id)} className="action-btn">🗑️</button>
                                <span className="tooltip-text delete-tip">Eliminar</span>
                            </div>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Todo;