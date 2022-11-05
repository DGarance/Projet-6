//Importation du package Express
const express = require("express");

//Importation du router
const router = express.Router();

//Importation du controller User
const userCtrl = require("../controllers/user");

//Importations des middleware "checkEmail" et "checkPassword"
const checkEmail = require("../middleware/check-email");
const checkPassword = require("../middleware/check-password");

//Définition des routers
router.post("/signup", checkEmail, checkPassword, userCtrl.signup);
router.post("/login", userCtrl.login);

//Exportation des routers
module.exports = router;
