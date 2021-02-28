const router = require('express').Router();

const { getAllProducts, getProductById } = require("../controllers/productController");

//GET all products from database
// route is GET /api/products
router.get("/", getAllProducts);





//GET a products by id from database
// route is GET /api/products/:id
router.get("/:id", getProductById);

module.exports = router;

