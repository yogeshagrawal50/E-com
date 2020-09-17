const express = require('express');
const router = express.Router()

const {
  getProductByID,
  createProduct,
  getProduct,
  photo,
  deleteProduct,
  updateProduct, 
  getAllProducts,
  getAllUniqueCatgories
} = require("../controllers/product")

const  { isSignedIn, isAuthenticated, isAdmin} = require ("../controllers/auth")
const  { getUserByID, pushOrderInPurchaseList}  = require ("../controllers/user");

//params
router.param('userId', getUserByID)
router.param('productId', getProductByID)

//actual routes
router.post('/product/create/:userId',isSignedIn, isAuthenticated, isAdmin,createProduct )

//read 
router.get('/product/:producId', getProduct)
router.get('/product/photo/:producId', photo)

//delete route
router.delete("/product/:productId/:userId",isSignedIn, isAuthenticated, isAdmin,deleteProduct)

//update route
router.put("/product/:productId/:userId",isSignedIn, isAuthenticated, isAdmin,updateProduct)

//listing route
router.get("/products", getAllProducts)

router.get("/products/categories", getAllUniqueCatgories)

module.exports = router;