//Importartion du package Mongoose
const mongoose = require("mongoose");

//Importation du package Mongoose Unique Validator
const uniqueValidator = require("mongoose-unique-validator");

//Création du schéma User
const userSchema = mongoose.Schema({
  email: { type: String, required: true, unique: true },
  passwword: { type: String, required: true },
});

//On utilise le plugin unique-validator pour éviter les doublons d'utilisateurs
userSchema.plugin(uniqueValidator);

//Exportation du Schema User
module.exports = mongoose.model("User", userSchema);
