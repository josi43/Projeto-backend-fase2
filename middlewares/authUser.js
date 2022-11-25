const jwt = require("jsonwebtoken");

const config = require('../config/env.json');

module.exports = async function(req, res, next){

    const authHeader = req.headers['authorization'];
    const token  = authHeader && authHeader.split(" ")[1];
    
    if(!token) {
        return res.status(401).json({msg:"acesso negado"})
    }

    try{
        const secret = config.secret
        jwt.verify(token, secret)
        next()

    } catch(err) {
        console.log(err)
        res.status(400).json({msg:err})
    }
}