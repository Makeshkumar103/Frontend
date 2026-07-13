import React from 'react';
import TodoItem from './TodoItem';

function TodoList({ todos, onDeleteTodo, onToggleComplete }) {
  return (
    <div className="todo-container">
      <ul className="todo-list">
        {todos.map(todo => (
          <TodoItem
            key={todo.id}
            todo={todo}
            onDelete={onDeleteTodo}
            onToggleComplete={onToggleComplete}
          />
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
