const express = require('express'); // the app instance here guys 
require('dotenv').config();// we use  dotenv to store our environment variables.
const mongoose = require('mongoose');
const User = require('./models/User'); 

const app = express();
app.use(express.json());
//all this just for testing if you wanna test the insert of the user in the database use postman to send the post request
// Get the home page
app.get('/', (req, res) => {
  res.send("This is the home page");
});

// Create a new user (POST request to /test) Modify each time these informations if you wanna test the insert 
app.post('/test', async (req, res) => {
  try {
    const newUser = new User({
        nom: 'John Doe',
        prenom: 'Doe',
        email: 'johndoe@example.com',
        password: 'password123',
        num_telephone: '0123456789',
        cin: '1234567890',
        role: 'user'
    });

    const savedUser = await newUser.save(); // here we save the  user to the database
    res.json({ message: 'User created successfully!', user: savedUser });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Error creating user' }); // test message
  }
});

// Connect to MongoDB using async/await for cleaner handling  of asynchronous code
// the async/await is the best for handling these types of tasks
const connectToMongo = async () => {
  try {
    await mongoose.connect(process.env.mongo_url);
    console.log('Connected to MongoDB');
    app.listen(process.env.PORT);
  } catch (err) {
    console.error('Error connecting to MongoDB:', err.message);
    process.exit(1); // Exit process on connection failure
  }
};

connectToMongo();

