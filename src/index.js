const express = require('express');
const path = require('path');
const bcrypt = require('bcrypt');
const collection = require("./config"); // Assuming this is your MongoDB collection model
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.set('view engine', 'ejs');
app.use(express.static("public"));

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
        const existingUser = await collection.findOne({ name: username });

        if (existingUser) {
            return res.send("User already exists");
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = new collection({
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
        const user = await collection.findOne({ name: username });

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

const port = 5000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
