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
        if (value.trim().length < 4) {
            setError("La tarea es muy cortita, debe de tener al menos 4 letras");
            return;
        }
        addTodo(value);
        setValue("");
        setError("");
    };

    return (
        <div className="form-section" style={{ marginTop: '0' }}>
            <form onSubmit={handleSubmit} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '5px', marginTop: '0' }}>
                <input
                    type="text"
                    placeholder="Añadir nueva tarea..."
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                />
                <div className="tooltip-container">
                    <button type="submit" className="add-btn">🌱</button>
                    <span className="tooltip-text priority-tip">Añadir tarea</span>
                </div>
            </form>

            {error && <p style={{ color: 'red', fontSize: '0.8rem', textAlign: 'center' }}>{error}</p>}

            <div style={{ marginTop: '15px', textAlign: 'center' }}>
                <label>Filtrar: </label>
                <select onChange={(e) => setFilter(e.target.value)}>
                    <option value="Seleccionar">Seleccionar filtro</option>
                    <option value="Todas">Todas las tareas</option>
                    <option value="Completadas">Tareas completadas</option>
                    <option value="Pendientes">Tareas pendientes</option>
                </select>
            </div>
        </div>
    );
};

export default Form;