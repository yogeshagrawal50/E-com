const express = require('express');
const router = express.Router()

const { getProductByID, createProduct, getProduct, photo} = require ("../controllers/product")
const  { isSignedIn, isAuthenticated, isAdmin} = require ("../controllers/auth")
const  { getUserByID}  = require ("../controllers/user");
const { create } = require('../models/user');

//params
router.param('userId', getUserByID)
router.param('productId', getProductByID)

//actual routes
router.post('/product/create/:userId',isSignedIn, isAuthenticated, isAdmin,createProduct )

//read 
router.get('/product/:producId', getProduct)
router.get('/product/photo/:producId', photo)


module.exports = router;