const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose'); //to connect to mongodb database

//looks up env variables from a .env file rather than local machine
require('dotenv').config(); 

//Create express server
const app = express();
const port = process.env.PORT || 5000; //port of the app is 5000

//create middleware
app.use(cors());
app.use(express.json()); //to allow server to parse json.

//connect to the mondoDB
const uri = process.env.ATLAS_URI; //uri to connect to cloud atlas
mongoose.connect(uri, {useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true});
const connection = mongoose.connection;
connection.once('open', () => {
    console.log("MongoDB connection established successfully");
});

//Get the routes to the server
const exercisesRouter = require('./routes/exercises');
const usersRouter = require('./routes/users');

app.use('/exercises', exercisesRouter);
app.use('/users', usersRouter);

//start the server
app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});
