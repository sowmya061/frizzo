const express = require('express');
const path = require('path');
const bcrypt = require('bcrypt');
const collection = require("./config");
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.set('view engine', 'ejs');
app.use(express.static("public")); 
app.get('/', (req, res) => {
    res.render('login');
});
app.get('/signup', (req, res) => {
    res.render('signup');
});
//signup
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
//user login
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
        res.render('welcome'); 
    } catch (error) {
        console.error("Error logging in:", error);
        res.status(500).send("Error logging in. Please try again later.");
    }
});
app.get('/logout', (req, res) => {
    res.render('home');
});
// front-end

const port = 5001;

app.get('/transaction',(req,res)=>{
    res.render('transaction');
})
const port = 5000;

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
