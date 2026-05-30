import React from 'react';

function TaskList({ tasks, toggleTask, deleteTask }) {
  if (tasks.length === 0) {
    return (
      <div className="empty-state">
        No tasks yet. Add one above! 👆
      </div>
    );
  }

  return (
    <div className="task-list">
      {tasks.map(task => (
        <div
          key={task._id}
          className={`task-item ${task.completed ? 'completed' : ''}`}
        >
          <input
            type="checkbox"
            checked={task.completed}
            onChange={() => toggleTask(task._id, task.completed)}
          />
          <span>{task.title}</span>
          <button
            className="delete-btn"
            onClick={() => deleteTask(task._id)}
          >
            ✕
          </button>
        </div>
      ))}
    </div>
  );
}

export default TaskList;