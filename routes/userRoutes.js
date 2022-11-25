const express = require("express");
const controller = require("../controllers/userController");

const router = express.Router();

router.post('/', (req,res)=>{
    res.json({msg:"verifica a rota correta! /cadastrar ou /login"})
})

router.post("/cadastrar", controller.registrar);
router.post("/login", controller.login);

module.exports = router;