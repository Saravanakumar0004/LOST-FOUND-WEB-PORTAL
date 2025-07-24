const express = require('express');
const dotenv = require('dotenv');
const colors = require('colors');
const { errorHandler } = require('./middleware/errormiddleware');
const connectDB = require('./config/db');
const cors = require('cors');

// Load environment variables
dotenv.config();

// ✅ Connect to MongoDB
connectDB();

// ✅ Initialize Express app
const app = express();

// ✅ Middleware (must come after app is initialized)
app.use(cors()); // Enable CORS
app.use(express.json()); // Parse JSON body
app.use(express.urlencoded({ extended: false })); // Parse form data

// ✅ API Routes
app.use('/api/goals', require('./router/goalrouter'));
app.use('/api/users', require('./router/userroutes'));
app.use('/api/contacts', require('./router/contactrouter'));


// ✅ Error Handling Middleware
app.use(errorHandler);

// ✅ Get PORT from .env or fallback to 5000
const port = process.env.PORT || 5000;

// ✅ Start Server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`.cyan.bold);
});