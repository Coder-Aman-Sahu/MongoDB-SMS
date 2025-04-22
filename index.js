const express = require('express');
const mongoose = require('mongoose');
const Student = require('./models/Student');
const Course = require('./models/Course');

const app = express();
app.use(express.json());

mongoose.connect('mongodb://localhost:27017/student_management');


mongoose.connection.once('open', async () => {
  console.log('MongoDB connected');

  await Student.collection.createIndex({ email: 1 }, { unique: true });
  await Course.collection.createIndex({ courseName: 'text' });
});

// Create Student
app.post('/students', async (req, res) => {
  try {
    const student = new Student(req.body);
    await student.save();
    res.send(student);
  } catch (err) {
    res.status(400).send(err);
  }
});

// Create Course
app.post('/courses', async (req, res) => {
  try {
    const course = new Course(req.body);
    await course.save();
    res.send(course);
  } catch (err) {
    res.status(400).send(err);
  }
});

// Get All Students with Course Details
app.get('/students', async (req, res) => {
  const students = await Student.find().populate('enrolledCourses');
  res.send(students);
});

// Update Student
app.put('/students/:id', async (req, res) => {
  const updated = await Student.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.send(updated);
});

// Delete Student
app.delete('/students/:id', async (req, res) => {
  await Student.findByIdAndDelete(req.params.id);
  res.send({ message: 'Student deleted' });
});

// Start server
app.listen(3000, () => {
  console.log('Server running on port 3000');
});
