import Todo from './Todo.jsx';

const TodoList = ({ todos, deleteTodo, toggleTodo, editTodo, filter }) => {
    const getEmptyMessage = () => {
        if (filter === "Completadas") return "No hay tareas completadas";
        if (filter === "Pendientes") return "No hay tareas pendientes";
        return "No hay tareas, añade una nueva";
    };

    return (
        <div className="todo-list">
            {todos.length === 0 ? (
                <p className="empty-msg" style={{ 
                    gridColumn: '1 / -1', 
                    textAlign: 'center', 
                    fontSize: '1.2rem', 
                    color: '#5d4037',
                    padding: '40px',
                    fontWeight: 'bold'
                }}>
                    {getEmptyMessage()}
                </p>
            ) : (
                todos.map((todo) => (
                    <Todo
                        key={todo.id}
                        todo={todo}
                        deleteTodo={deleteTodo}
                        toggleTodo={toggleTodo}
                        editTodo={editTodo}
                    />
                ))
            )}
        </div>
    );
};

export default TodoList;