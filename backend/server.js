//import express and cors
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

//configures enviornment variable in dotenv file
require('dotenv').config();

//Create an express server on port 5000
const app = express();
const port = process.env.port || 5000;

//middle wares Cors middle ware and parse json file 
app.use(cors());
app.use(express.json());
 

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, {useNewUrlParser: true, useCreateIndex:true, useUnifiedTopology: true }
);


//connect mongodb connection
const connection = mongoose.connection;
//mongodb database connection once setup
connection.once('open', () => {
    console.log("MongoDB database connection established Succesfully");
})

const exercicesRouter = require('./routes/exercises');
const usersRouter = require('./routes/users');


//Require the files
app.use('/exercises', exercicesRouter);
app.use('/users', usersRouter); 

//use the files

//starts server by listening at certain port

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});

