const express = require('express');
const router = express.Router()

const  { getCategoryById , removeCategory, updateCategory, createCategory, getAllCategory, getCategory} = require ("../controllers/category")
const  { isAuthenticated, isAdmin, isSignedIn } = require ("../controllers/auth")
const  { getUserByID}  = require ("../controllers/user")

//params
router.param('userId', getUserByID)
router.param('categoryId', getCategoryById )

//actual routes

//create
router.post("/category/create/:userId",
  isSignedIn,
  isAuthenticated,
  isAdmin,
  createCategory)

  //read route
  router.get("/category/:categoryId", getCategory);
  router.get("/categories", getAllCategory);

//update
router.put(
  "/category/:categoryId/:userId",
  isSignedIn,
  isAuthenticated,
  isAdmin,
  updateCategory
);


  //delete
  router.delete("/category/:categoryId/:userId",
  isSignedIn,
  isAuthenticated,
  isAdmin,
  removeCategory)


module.exports = router;
