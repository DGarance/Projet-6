//Inportation du package password validator
const passwordValidator = require("password-validator");

const passwordSchema = new passwordValidator();

passwordSchema
  .is()
  .min(8) // Minimum length 8
  .is()
  .max(100) // Maximum length 100
  .has()
  .uppercase() // Must have uppercase letters
  .has()
  .lowercase() // Must have lowercase letters
  .has()
  .digits(2) // Must have at least 2 digits
  .has()
  .not()
  .spaces() // Should not have spaces
  .is()
  .not()
  .oneOf(["Passw0rd", "Password123"]); // Blacklist these values

// Vérification du mot de passe
module.exports = (req, res, next) => {
  // Si le mot de passe n'est pas valide
  if (!passwordSchema.validate(req.body.password)) {
// Alors on renvoie un message d'erreur indiquant à l'utilisateur ce qu'il manque pour corriger
    res.statusMessage = `Le mot de passe ${passwordSchema.validate(
      req.body.password,
      { list: true }
    )} n'est pas assez fort`;
    return res.status(400).send();
  }
  // Sinon on passe à l'étape suivante
  next();
};
