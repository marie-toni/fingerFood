require('dotenv').config();

const express = require('express');
const connectDB = require('./configs/database.js');

const productRoute = require('./routes/productRoute.js');

const app = express();


// Connect Database
connectDB();


// Middleware
app.use(express.json());


// Routes
app.use('/api/products', productRoute);


// Default Route
app.get('/', (req, res) => {
  res.send('API is running...');
});


const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});