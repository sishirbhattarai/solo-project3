require("dotenv").config();

const express = require("express");
const connectDB = require("./config/db");
const productRoutes = require("./routes/productRoutes");

connectDB();
//const mongoose = require("mongoose");

const PORT = process.env.PORT || 5000;

const app = express();

// app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/api/products', productRoutes);

// app.use(express.static("public"));

// mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/budget", {
//   useNewUrlParser: true,
//   useFindAndModify: false
// });

// routes
// app.use(require("./routes/api.js"));

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});