const express = require('express');
const dotenv =  require('dotenv');
const { errorHandler } = require('./middleware/errormiddleware');
const port = process.env.PORT || 5000;

dotenv.config();
const app = express();
app.use(express.json()); // Middleware to parse JSON request bodies

app.use(express.urlencoded({ extended: false })); // Middleware to parse URL-encoded data

app.use('/api/goals', require('./router/goalrouter'));

app.use(errorHandler); // Error handling middleware

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});


// http://localhost:5000/api/goals