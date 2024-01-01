// TodoList.js

import React, { useState } from 'react';

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [todoText, setTodoText] = useState('');
  const [editMode, setEditMode] = useState(false);
  const [editableTask, setEditableTask] = useState('');
  const [editableIndex, setEditableIndex] = useState(-1);

  const handleAddTodo = () => {
    if (todoText.trim() !== '') {
      if (editMode) {
        // Update existing task in edit mode
        const updatedTodos = [...todos];
        updatedTodos[editableIndex] = todoText;
        setTodos(updatedTodos);
        setEditMode(false);
      } else {
        // Add new task
        setTodos([...todos, todoText]);
      }
      setTodoText('');
    }
  };

  const handleEditTodo = (index) => {
    setEditMode(true);
    setEditableIndex(index);
    setEditableTask(todos[index]);
    setTodoText(todos[index]);
  };

  const handleDeleteTodo = (index) => {
    const updatedTodos = todos.filter((_, i) => i !== index);
    setTodos(updatedTodos);
  };

  return (
    <div>
      <h2>Todo List</h2>
      <input
        type="text"
        value={todoText}
        onChange={(e) => setTodoText(e.target.value)}
        placeholder="Add a new task..."
      />
      <button onClick={handleAddTodo}>{editMode ? 'Update' : 'Add'}</button>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            {editMode && editableIndex === index ? (
              <input
                type="text"
                value={editableTask}
                onChange={(e) => setEditableTask(e.target.value)}
              />
            ) : (
              <span>{todo}</span>
            )}
            {editMode && editableIndex === index ? (
              <button onClick={() => handleAddTodo()}>Done</button>
            ) : (
              <button onClick={() => handleEditTodo(index)}>Edit</button>
            )}
            <button onClick={() => handleDeleteTodo(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
