//Importation du router Express
const express = require("express");
const router = express.Router();
//Importation des middlewares "auth" et "multer-config"
const auth = require("../middleware/auth");
const multer = require("../middleware/multer-config");
//Importation des controllers
const sauceCtrl = require("../controllers/sauces");

// Définition des routers
router.post("/", auth, multer, sauceCtrl.createSauce);
router.get("/:id", auth, sauceCtrl.getOneSauce);
router.put("/:id", auth, multer, sauceCtrl.modifySauce);
router.delete("/:id", auth, sauceCtrl.deleteSauce);
router.get("/", auth, sauceCtrl.getAllSauces);
router.post("/:id/like", auth, sauceCtrl.rateSauce);

// Exportation des routers
module.exports = router;
