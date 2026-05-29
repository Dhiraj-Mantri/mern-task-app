import React, { useState } from 'react';

function TaskForm({ addTask }) {
  const [title, setTitle] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim()) return;
    addTask(title);
    setTitle('');
  };

  return (
    <form onSubmit={handleSubmit} style={{ display: 'flex', gap: '10px', marginBottom: '20px' }}>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Add a new task..."
        style={{ flex: 1, padding: '8px', fontSize: '16px' }}
      />
      <button type="submit" style={{ padding: '8px 16px', fontSize: '16px' }}>
        Add
      </button>
    </form>
  );
}

export default TaskForm;