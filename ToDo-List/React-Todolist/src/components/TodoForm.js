import React, { useState } from 'react';

function TodoForm({ onAddTodo, onFilterChange }) {
  const [inputValue, setInputValue] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddTodo(inputValue);
    setInputValue('');
  };

  const handleFilterChange = (e) => {
    onFilterChange(e.target.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text" 
        className="todo-inputs"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Add a new todo..."
      />
      <button type="submit" className="todo-button">
        +
      </button>
      <div className="select">
        <select 
          name="todos" 
          className="filter-todos"
          onChange={handleFilterChange}
        >
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="uncompleted">Uncompleted</option>
        </select>
      </div>
    </form>
  );
}

export default TodoForm;
