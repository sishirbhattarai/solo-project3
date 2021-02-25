require("dotenv").config();

const express = require('express');
// const routes = require('./routes');


const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


// turn on connection to db and server
app.listen(PORT, function () {
  console.log(`Now listening on port ${PORT}!`);
});
