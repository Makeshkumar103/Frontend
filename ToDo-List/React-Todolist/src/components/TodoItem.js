import React, { useState } from 'react';

function TodoItem({ todo, onDelete, onToggleComplete }) {
  const [isDeleting, setIsDeleting] = useState(false);

  const handleDelete = () => {
    setIsDeleting(true);
    // Add a small delay to show the animation
    setTimeout(() => {
      onDelete(todo.id);
    }, 500);
  };

  const handleToggle = () => {
    onToggleComplete(todo.id);
  };

  return (
    <div className={`todo ${todo.completed ? 'completed' : ''} ${isDeleting ? 'fall' : ''}`}>
      <li className="todo-item">{todo.text}</li>
      <button 
        className="complete-btn"
        onClick={handleToggle}
      >
        <i className="fas fa-check"></i>
      </button>
      <button 
        className="trash-btn"
        onClick={handleDelete}
      >
        <i className="fas fa-trash"></i>
      </button>
    </div>
  );
}

export default TodoItem;
