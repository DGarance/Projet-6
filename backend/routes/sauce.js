const express = require("express");
const router = express.Router();

const sauceCtrl = require("../controllers/sauce");

router.get("/", sauceCtrl.getAllSauces);
router.get("/:id", sauceCtrl.getOneSauce);
router.post("/", sauceCtrl.createSauce);
router.post("/:id", sauceCtrl.rateSauce);
router.put("/:id", sauceCtrl.modifySauce);
router.delete("/", sauceCtrl.getAllSauces);

module.exports = router;
