import { useState } from "react";

const Form = ({ addTodo, setFilter }) => {
    const [value, setValue] = useState("");
    const [error, setError] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!value.trim()) {
            setError("El campo no puede estar vacío");
            return;
        }
        addTodo(value);
        setValue("");
        setError("");
    };

    return (
        <form onSubmit={handleSubmit} className="todo-form">
            <div classNamer="input-group">
                <span className="icon">📝</span>
                <input
                    type="text"
                    placeholder="Añadir nueva tarea "
                    value={value}
                    onChange={(e) => setValue(e.target.value)} />
                <button type="submit" className="add-btn">+</button>
            </div>
            {error && <p className="error-message">{error}</p>}

            <select onChange={(e) => setFilter(e.target.value)} className="filter-select">
                <option value="Todas">Todas 📋</option>
                <option value="Completadas">Completadas ✅</option>
                <option value="Pendientes">Pendientes ⏳</option>
            </select>
        </form>
    );

};

export default Form;