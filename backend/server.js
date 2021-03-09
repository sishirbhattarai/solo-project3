var cors = require('cors')
require("dotenv").config();

const path = require("path");
const express = require("express");
const connectDB = require("./config/db");
const productRoutes = require("./routes/productRoutes");

connectDB();
//const mongoose = require("mongoose");

const PORT = process.env.PORT || 3001;

const app = express();

// app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors())
app.use('/api/products', productRoutes);


// app.use(express.static("public"));

// mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/budget", {
//   useNewUrlParser: true,
//   useFindAndModify: false
// });

// routes
// app.use(require("./routes/api.js"));
if(process.env.NODE_ENV === "production") {
  // Set static folder
  app.use(express.static("client/build"))
  app.get("*", (req, res) => res.sendFile(path.resolve(__dirname, "../clients", "build", "index.html")))
}

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});