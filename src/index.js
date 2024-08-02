const express = require('express');
const cors=require('cors');
const bcrypt = require('bcrypt');
const User = require('./config'); // Import User model
const Transaction = require('./transactiondb'); // Import Transaction model

const app = express();
const port = 5000;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.set('view engine', 'ejs');
app.use(express.static("public"));

// CORS
app.use(cors());

// Routes for rendering pages
app.get('/', (req, res) => {
    res.render('login');
});

app.get('/signup', (req, res) => {
    res.render('signup');
});

app.get('/transaction', (req, res) => {
    res.render('transaction');
});

// Signup endpoint
app.post("/signup", async (req, res) => {
    try {
        const { username, password } = req.body;
        const existingUser = await User.findOne({ name: username });

        if (existingUser) {
            return res.send("User already exists");
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = new User({
            name: username,
            password: hashedPassword
        });

        const savedUser = await newUser.save();
        console.log("User registered:", savedUser);
        res.send("User registered successfully!");
    } catch (error) {
        console.error("Error registering user:", error);
        res.status(500).send("Error registering user. Please try again later.");
    }
});

// Login endpoint
app.post('/login', async (req, res) => {
    try {
        const { username, password } = req.body;
        const user = await User.findOne({ name: username });

        if (!user) {
            return res.send('User not found');
        }

        const passwordMatch = await bcrypt.compare(password, user.password);

        if (!passwordMatch) {
            return res.send('Incorrect password');
        }

        res.render('welcome'); // Render the welcome page after successful login
    } catch (error) {
        console.error("Error logging in:", error);
        res.status(500).send("Error logging in. Please try again later.");
    }
});

// Transaction endpoints
app.post('/api/transaction', async (req, res) => {
    const { date, expensetype, month, amount } = req.body;

    try {
        const newTransaction = new Transaction({
            date,
            expensetype,
            month,
            amount
        });
        console.log('hi from db');
        const savedTransaction = await newTransaction.save();
        res.status(200).json(savedTransaction);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

app.get('/transaction', (req, res) => {
    res.render('transaction');
});

// Logout endpoint (not implemented in your code)
app.get('/logout', (req, res) => {
    res.render('home');
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});