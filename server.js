const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// Middleware to parse JSON
app.use(express.json());

// Sample data
let products = [];
let users = [];
let transactions = [];

// Endpoint to get all products
app.get('/api/products', (req, res) => {
    res.json(products);
});

// Endpoint to create a new product
app.post('/api/products', (req, res) => {
    const product = req.body;
    products.push(product);
    res.status(201).json(product);
});

// Endpoint to get all users
app.get('/api/users', (req, res) => {
    res.json(users);
});

// Endpoint to create a new user
app.post('/api/users', (req, res) => {
    const user = req.body;
    users.push(user);
    res.status(201).json(user);
});

// Endpoint to get all transactions
app.get('/api/transactions', (req, res) => {
    res.json(transactions);
});

// Endpoint to create a new transaction with a 2% commission
app.post('/api/transactions', (req, res) => {
    const { amount, userId } = req.body;
    const commission = amount * 0.02;
    const transaction = { amount, userId, commission };
    transactions.push(transaction);
    res.status(201).json(transaction);
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
