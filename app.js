require("dotenv").config();
require("express-async-errors");
const express = require("express");
const app = express();
const cors = require("cors");

//Database
const {sequelize} = require('./db/connect');

const port = process.env.PORT || 5000;


const start = async() => {
    try {
        await sequelize.authenticate();
        app.listen(port, () =>
            console.log(`Server is listening on port ${port}...`)
        );
    } catch (error) {
        console.log(error);
    }
};

start();