const express = require('express');
const app = express();
const mongoose = require('mongoose');
const passport = require('passport');
const session = require('express-session');
const MongoStore = require('connect-mongo');
const methodOverride = require('method-override');
const flash = require('express-flash');
const logger = require('morgan');
const connectDB = require('./config/database');
const mainRoutes = require('./routes/main');
const authRoutes = require('./routes/auth');

// Use .env file in config folder
require('dotenv').config({ path: './config/.env' });

// Passport config
require('./config/passport')(passport);

// Connect to Database
connectDB();

// Use EJS for views
app.set('view engine', 'ejs');

// Static Folder
app.use(express.static('public'));

// Body Parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Logging
app.use(logger('dev'));

// Use forms for put / delete
app.use(methodOverride('_method'));

// Setup Sessions - stored in MongoDB
app.use(
    session({
        secret: 'the chair is against the wall',
        resave: false,
        saveUninitialized: false,
        store: new MongoStore({ mongoUrl: process.env.DB_STRING, collection: "sessions" }),
    })
);

// Passport middleware
app.use(passport.initialize());
app.use(passport.session());

// Use flash messages for errors, info, etc

app.use(flash());

// Setup routes for which the server will listen
app.use('/', mainRoutes);
app.use('/auth', authRoutes);

// Run server
app.listen(process.env.PORT, () => {
    console.log(`We are live on port ${process.env.PORT}!`);
});