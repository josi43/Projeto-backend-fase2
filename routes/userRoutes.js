const express = require("express");
const controller = require("../controllers/userController.js");
const chekValidation = require('../middlewares/authUser')

const router = express.Router();

router.get('/:id', chekValidation, controller.listar)
router.post("/cadastrar", controller.registrar);
router.post("/login", controller.login);

module.exports = router;