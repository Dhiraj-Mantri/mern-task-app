import React from 'react';

function TaskList({ tasks, toggleTask, deleteTask }) {
  if (tasks.length === 0) return <p>No tasks yet. Add one above!</p>;

  return (
    <ul style={{ listStyle: 'none', padding: 0 }}>
      {tasks.map(task => (
        <li key={task._id} style={{
          display: 'flex',
          alignItems: 'center',
          gap: '10px',
          padding: '10px',
          marginBottom: '8px',
          border: '1px solid #ddd',
          borderRadius: '4px'
        }}>
          <input
            type="checkbox"
            checked={task.completed}
            onChange={() => toggleTask(task._id, task.completed)}
          />
          <span style={{
            flex: 1,
            textDecoration: task.completed ? 'line-through' : 'none',
            color: task.completed ? '#999' : '#000'
          }}>
            {task.title}
          </span>
          <button
            onClick={() => deleteTask(task._id)}
            style={{ color: 'red', border: 'none', background: 'none', cursor: 'pointer', fontSize: '16px' }}
          >
            ✕
          </button>
        </li>
      ))}
    </ul>
  );
}

export default TaskList;