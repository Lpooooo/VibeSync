const express = require('express');
const { connectDB } = require('./db');
const authRoutes = require('./routes/authRoutes');

const app = express();
const PORT = process.env.PORT || 3030;

// Middleware
app.use(express.json());

// Routes
app.use('/api/auth', authRoutes);

// Connect to the database
connectDB();

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});