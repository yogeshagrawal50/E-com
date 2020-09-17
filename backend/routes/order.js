const express = require('express');
const router = express.Router()

const  { isSignedIn, isAuthenticated, isAdmin} = require ("../controllers/auth")
const  { getUserByID}  = require ("../controllers/user");
const  { updateStock } = require("../controllers/product")
const { getOrderById } = require("../controllers/order")

//params
router.param("userId", getUserByID)
router.param("orderId", getOrderById)

//create 

module.exports = router