var express = require('express');
var router = express.Router();
const {handleSignIn,handleSignUp,handleFindByEmail}= require('../Controllers/users')
 

router.post('/signin', handleSignIn);

router.post('/signup',handleSignUp)

router.post('/findbyemail',handleFindByEmail)

module.exports = router;
