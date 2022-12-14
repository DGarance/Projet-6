//Importation du package jsonwebtoken pour générer les tokens
const jwt = require("jsonwebtoken");

//Vérification des données
module.exports = (req, res, next) => {
  try {
    const token = req.headers.authorization.split(" ")[1];
    //Décodage du token et vérification
    const decodedToken = jwt.verify(token, "RANDOM_TOKEN_SECRET");
    const userId = decodedToken.userId;
    req.auth = {
      userId: userId,
    };
    //on passe à l'étape suivante si tout est OK
    next();
  } catch (error) {
    // si l'authentification ne fonctionne pas, alors on renvoie un message d'erreur
    res.status(401).json({ error });
  }
};
