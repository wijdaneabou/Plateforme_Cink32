const express = require('express'); // the app instance here guys 
require('dotenv').config();// we use  dotenv to store our environment variables.
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require("body-parser");
const authRoutes = require('./routes/googleRoutes');
const usersRoutes = require('./routes/usersRoutes');
const passportSetup = require('./config/passport-setup');
const eventsRouter =require('./Routes/Admin/EventRouter');
const session = require('express-session'); 
const app = express();
app.use(bodyParser.json());
// we gonna use session just temporary because the jwt will be handled by the other team NADIN
app.use(session({
  secret: '123',
  resave: false,
  saveUninitialized: true,
  cookie: { secure: false } 
}));
//the cors policy
const corsOptions = {
    origin: 'http://localhost:5173',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
    optionsSuccessStatus: 204,
  };

app.use(cors(corsOptions));
app.use('/auth', authRoutes);
app.use('/', usersRoutes);
app.use('/api/events', eventsRouter);
app.use(passportSetup.initialize());
app.use(passportSetup.session());






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

