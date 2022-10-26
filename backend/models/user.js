// Importation du package Mongoose
const mongoose = require("mongoose");
// Importation du package Mongoose Unique Validator 
const uniqueValidator = require("mongoose-unique-validator");
// Création du schéma User
const userSchema = mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

//On évite les doublons avec un unique utilisateur
userSchema.plugin(uniqueValidator);
//Exportation du schema User
module.exports = mongoose.model("User", userSchema);
