const express = require('express');
const router  =  express.Router()

const {getUserByID, updateUser, getUser, userPurchaseList} = require("../controllers/user")
const { isSignedIn, isAdmin, isAuthenticated} = require("../controllers/auth")

router.param ("userId", getUserByID )
router.get ('/user/:userId',isSignedIn, isAuthenticated ,getUser )
router.put('/user/:userId',isSignedIn, isAuthenticated, updateUser )
router.get ('/orders/user/:userId',isSignedIn, isAuthenticated ,userPurchaseList )

module.exports = router