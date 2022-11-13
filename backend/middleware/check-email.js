//Importation du package "email-validator" pour vérifier si l'email est correct
const emailValidator = require("email-validator");

//Vérification de l'adresse mail
module.exports = (req, res, next) => {
  // Si l'adresse mail ne correspond pas à la forme voulue
  if (!emailValidator.validate(req.body.email)) {
    // Alors on renvoie une erreur avec un code 400
    res.statusMessage = `L'e-mail ${req.body.email} n'est pas valide`;
    return res.status(400).send();
  }
  // Sinon on passe à l'étape suivante
  next();
};
