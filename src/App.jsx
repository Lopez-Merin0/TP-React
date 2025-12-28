import { useState, useEffect, use } from "react";
import Form from "./components/Form";
import TodoList from "./components/TodoList";

function App() {
    const [todos, setTodos] = useState(() => {
        const savedTodos = localStorage.getItem("todos");
        return savedTodos ? JSON.parse(savedTodos) : [];
    });
    const [filter, setFilter] = useState("Todas");
    useEffect(() => {
        localStorage.setItem("todos", JSON.stringify(todos));
    }, [todos]);

    const addTodo = (text) => {
        const newTodo = { id: crypto.randomUUID(), text, completed: false };
        setTodos([...todos, newTodo]);
    };

    const deleteTodo = (id) => {
        if (window.confirm("¿Estás seguro de que deseas eliminar esta tarea?")) {
            setTodos(todos.filter((todo) => todo.id !== id));
        }
    };

    const toggleTodo = (id) => {
        setTodos(todos.map((todo) =>
            todo.id === id ? { ...todo, completed: !todo.completed } : todo
        ));
    };

    const filteredTodos = todos.filter((todo) => {
        if (filter === "Completadas") return todo.completed;
        if (filter === "Pendientes") return !todo.completed;
        return true;
    });

    return (
        <div className="app-container">
            <header>
                <h1>Mis pendientes</h1>
                <Form addTodo={addTodo} setFilter={setFilter} />
            </header>
            <TodoList
                todos={filteredTodos}
                deleteTodo={deleteTodo}
                toggleTodo={toggleTodo}
            />
        </div>
    );
}

export default App;