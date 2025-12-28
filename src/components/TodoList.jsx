import Todo from './Todo.jsx';

const TodoList = ({ todos, deleteTodo, toggleTodo, editTodo }) => {
    return (
        <div className="todo-list">
            {todos.length === 0 ? (
                <p className="empty-msg">No hay tareas pendientes</p>
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