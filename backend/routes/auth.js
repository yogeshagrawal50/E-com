var express = require("express");
var router = express.Router();
const {signup, signin, signout, isSignedIn} = require('../controllers/auth')
const { check , validationResult } = require('express-validator')


router.post("/signup",
[
  check("name", " Name should be atleast 3 char ").isLength({min:3}),
  check("email", " Email is requires ").isEmail(),
  check("password", " Password should be atleast 3 char ").isLength({min:3})
],
signup)

router.post("/signin",
[
  check("email", " Email is required ").isEmail(),
  check("password", " Password should be atleast 3 char ").isLength({min:3})
], 
signin)

router.get("/signout", signout)


module.exports = router;