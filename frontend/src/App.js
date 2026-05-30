import React, { useState, useEffect } from 'react';
import axios from 'axios';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import './App.css';

const API = 'http://localhost:5000/api/tasks';

function App() {
  const [tasks, setTasks] = useState([]);

  const fetchTasks = async () => {
    const res = await axios.get(API);
    setTasks(res.data);
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  const addTask = async (title) => {
    const res = await axios.post(API, { title });
    setTasks([...tasks, res.data]);
  };

  const toggleTask = async (id, completed) => {
    const res = await axios.put(`${API}/${id}`, { completed: !completed });
    setTasks(tasks.map(t => t._id === id ? res.data : t));
  };

  const deleteTask = async (id) => {
    await axios.delete(`${API}/${id}`);
    setTasks(tasks.filter(t => t._id !== id));
  };

  const completedCount = tasks.filter(t => t.completed).length;

  return (
    <div className="app">
      <div className="app-header">
        <h1>Task Manager</h1>
        <p>Stay organized, get things done</p>
      </div>
      <TaskForm addTask={addTask} />
      <div className="stats">
        <span>{tasks.length} total tasks</span>
        <span>{completedCount} completed</span>
      </div>
      <TaskList tasks={tasks} toggleTask={toggleTask} deleteTask={deleteTask} />
    </div>
  );
}

export default App;