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
        <div className="form-section">
            <form onSubmit={handleSubmit} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '5px' }}>
                <input
                    type="text"
                    placeholder="Añadir tarea..."
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                />
                <button type="submit" className="add-btn">＋</button>
            </form>

            {error && <p style={{ color: 'red', fontSize: '0.8rem', textAlign: 'center' }}>{error}</p>}

            <div style={{ marginTop: '15px', textAlign: 'center' }}>
                <label>Filtrar: </label>
                <select onChange={(e) => setFilter(e.target.value)}>
                    <option value="Todas">Todas 📋</option>
                    <option value="Completadas">Hechas ✅</option>
                    <option value="Pendientes">Por hacer ⏳</option>
                </select>
            </div>
        </div>
    );
};

export default Form;