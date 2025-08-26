// Basic Express server setup for Study Buddy AI
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();
const DbConnection=require("./db/dbconnection")

const app = express();
app.use(cors());
app.use(express.json());

DbConnection();

// Route imports
const userRoutes = require('./routes/userRoutes');
const noteRoutes = require('./routes/noteRoutes');

// Use routes
app.use('/api', userRoutes);
app.use('/api/notes', noteRoutes);

app.listen(process.env.PORT, () => {
    console.log(`Server is running on  http://localhost:${process.env.PORT}`)
});
