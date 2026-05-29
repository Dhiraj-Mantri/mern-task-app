const express = require('express');
const router = express.Router();
const Task = require('../models/taskModel');

// GET all tasks
router.get('/', async (req, res) => {
  const tasks = await Task.find();
  res.json(tasks);
});

// POST create a task
router.post('/', async (req, res) => {
  const task = await Task.create({
    title: req.body.title,
  });
  res.status(201).json(task);
});

// PUT update a task
router.put('/:id', async (req, res) => {
  const task = await Task.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(task);
});

// DELETE a task
router.delete('/:id', async (req, res) => {
  await Task.findByIdAndDelete(req.params.id);
  res.json({ message: 'Task deleted' });
});

module.exports = router;