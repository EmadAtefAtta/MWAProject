const jwtHelper = require('jsonwebtoken');
const mySecretKey='#!myTotalySecretKey!#';
function isAuthenticated(req, res, next) {
  
    
    if (typeof req.headers.authorization !== "undefined") {
        
        // retrieve the authorization header and parse out the
        // JWT using the split function
        let token = req.headers.authorization.split(" ")[1];
        console.log(this.token)
        // Here we validate that the JSON Web Token is valid and has been 
        // created using the same private pass phrase
        if (jwtHelper.verify(token,mySecretKey)) {
            // if the JWT is valid, allow them to hit
            // the intended endpoint
            //console.log(jwtHelper.decode(token))
            req.user = jwtHelper.decode(token).payload;
            return next();
        }
        else {
            // shut them out!
            console.log("jwtHelper")
            res.status(500).json({ success: 0, msg: 'Not Authorized' });
            //throw new Error("Not Authorized");
        }

    } else {
        console.log(req.headers)
        // No authorization header exists on the incoming
        // request, return not authorized and throw a new error 
        res.status(500).json({ success: 0, msg: 'Not Authorized' });
        //throw new Error("Not Authorized");
    }
}

module.exports = isAuthenticated;