const express = require("express");
const router = express.Router();


 const bcrypt = require("bcrypt");
 const User=require("../models/User");
 const jwt=require("jsonwebtoken");


const { loginRules,registerRules,validation } =require("../middleware/validator");
 const isAuth=require("../middleware/passport");
const controllers=require('../controllers/user')
//router.get("/",(req,res)=>{
  //  res.send("Hello GoMyCode");
//});

//register
router.post("/register",registerRules(),validation,controllers.register)
router.post("/login", loginRules(),validation,controllers.login )
router.get("/current", isAuth(),controllers.current)



module.exports = router;