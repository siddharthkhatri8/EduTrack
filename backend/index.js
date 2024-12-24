require('dotenv').config();
const express = require('express');
const cors = require('cors');
const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();
const app = express();

app.use(cors());
app.use(express.json());

const testDatabaseConnection = async () => {
    try {
      await prisma.$connect();
      console.log("Connected to Supabase database successfully!");
    } catch (error) {
      console.error("Failed to connect to Supabase database:", error);
    } finally {
      await prisma.$disconnect();   
    }
  };
  
  testDatabaseConnection();
  

// Get all students
app.get('/api/students', async (req, res) => {
  try {
    const students = await prisma.student.findMany();
    res.json(students);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Add a new student
app.post('/api/students', async (req, res) => {
  try {
    const { name, cohort, courses, dateJoined, lastLogin, status } = req.body;
    const newStudent = await prisma.student.create({
      data: {
        name,
        cohort,
        courses,
        dateJoined: new Date(dateJoined),
        lastLogin: new Date(lastLogin),
        status,
      },
    });
    res.json(newStudent);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Update a student
app.put('/api/students/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const updates = req.body;
    const updatedStudent = await prisma.student.update({
      where: { id },
      data: updates,
    });
    res.json(updatedStudent);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Delete a student
app.delete('/api/students/:id', async (req, res) => {
  try {
    const { id } = req.params;
    await prisma.student.delete({ where: { id } });
    res.json({ message: 'Student deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Server
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
