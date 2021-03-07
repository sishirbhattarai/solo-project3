const Product = require("../models/Product");



const getAllProducts = async (req, res) => {
    try {
      const products = await Product.find({});
      res.status(200).json(products);

    } catch (err) {
      console.error(error);
      res.status(500).json({message: "Server Error"});
    }
  };

  const getProductById = async (req, res) => {
    try {
      const product = await Product.findById(req.params.id);
  
      res.status(200).json(product);

    } catch (err) {
      console.error(error);
      res.status(500).json({message: "Server Error"});
    }
  };


  module.exports = { getAllProducts, getProductById, }


