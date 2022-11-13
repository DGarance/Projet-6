//Importation du package bcrypt pour hasher le mot de passe
const bcrypt = require("bcrypt");
//Importation du package jsonwebtoken pour générer les tokens
const jwt = require("jsonwebtoken");
//Importation du fichier user.js du dossier models
const User = require("../models/User");

//Inscription de l'utilisateur
exports.signup = (req, res, next) => {
  //Hashage du mot de passe 10 fois
  bcrypt
    .hash(req.body.password, 10)
    .then((hash) => {
      const user = new User({
        email: req.body.email,
        password: hash,
      });
      user
        //sauvergarde des données
        .save()
        //Réponse succès code 200
        .then(() => res.status(200).json({ message: "Utilisateur créée!" }))
        //Réponse erreur code 400
        .catch((error) => {
          res.statusMessage = error.message;
          res.status(400).json({ error });
        });
    })
    .catch((error) => res.status(500).json({ error }));
};

//Connexion de l'utilisateur 
exports.login = (req, res, next) => {
  //Méthode "findOne" pour trouver un seul utilisateur
  User.findOne({
    //Récupération de l'adresse email
    email: req.body.email,
  })
    .then((user) => {
      if (!user) {
        return res.status(401).json({ error: "Utilisateur non trouvé !" });
      }
      //Comparaison entre le mot de passe saisi et celui de la base de données
      bcrypt
        .compare(req.body.password, user.password)
        .then((valid) => {
          //Vérification de la validité du mot de passe
          if (!valid) {
            //Sinon on renvoie un message d'erreur
            return res.status(401).json({ error: "Mot de passe incorrect !" });
          }
          //Réponse succès code 200
          res.status(200).json({
            userId: user._id,
            token: jwt.sign({ userId: user._id }, "RANDOM_TOKEN_SECRET", {
              expiresIn: "24h",
            }),
          });
        })
        .catch((error) => res.status(500).json({ error }));
    })
    .catch((error) => res.status(500).json({ error }));
};
