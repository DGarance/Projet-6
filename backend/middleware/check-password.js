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
  if (!passwordSchema.validate(req.body.password)) {
    res.statusMessage = `Le mot de passe ${passwordSchema.validate(
      req.body.password,
      { list: true }
    )} n'est pas assez fort`;
    return res.status(400).send();
  }
  next();
};
