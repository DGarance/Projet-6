//Appel du fichier sauce dans le dossier models
const Sauce = require("../models/sauce");
// Importation du package "fs" de Node
const fs = require("fs");
const sauce = require("../models/sauce");

//Création d'une sauce

exports.createSauce = (req, res, next) => {
  // Modification du format de la requête pour la transformer en objet
  const sauceObject = JSON.parse(req.body.sauce);
  //Suppression du faux id qui est envoyé par le frontend
  delete sauceObject._id;
  const sauce = new Sauce({
    //Spread qu'on utilise pour faciliter la copie de tous les éléments de sauceObject
    ...sauceObject,
    //Récupération de l'url dynamique crée par multer
    imageUrl: `${req.protocol}://${req.get("host")}/images/${
      req.file.filename
    }`,
  });
  sauce
    //Sauvegarde de la sauce dans la base de données
    .save()
    // Promesse
    .then(() => {
      //Réponse de succès avec code 200
      req.status(201).json({ message: "Sauce enregistrée!" });
    })
    //Réponse d'erreur avec code 400
    .catch((error) => {
      res.status(400).json({ error });
    });
};

//Affichage d'une seule sauce

exports.getOneSauce = (req, res, next) => {
  // On recherche la sauce dans la base de données avec son id
  Sauce.findOne({
    _id: req.params.id,
  })
    //On la récupère
    .then((sauce) => {
      //Réponse de succès
      res.status(200).json(sauce);
    })
    //Message d'erreur si la récupération a échouée, sauce non trouvée
    .catch((error) => {
      res.status(404).json({ error: error });
    });
};

//Modification d'une sauce

exports.modifySauce = (req, res, next) => {
  // Création d'un objet en demande permettant de modifier une image
  const sauceObject = req.file
    ? {
        //Récupération des infos des objets
        ...JSON.parse(req.body.sauce),
        imageUrl: `${req.protocol}://${req.get("host")}/images/${
          req.file.filename
        }`,
      }
    : {
        ...req.body,
      };
  delete sauceObject.userId;
  Sauce.findOne({ _id: req.params.id })
    .then((sauce) => {
      if (sauce.userId != req.auth.userId) {
        res.status(401).json({ message: "Action non autorisée" });
      } else {
        Sauce.updateOne(
          {
            _id: req.params.id,
          },
          {
            ...sauceObject,
            _id: req.params.id,
          }
        )
          .then(() => res.status(200).json({ message: "Sauce modifié" }))
          .catch((error) => res.status(401).json({ error }));
      }
    })
    .catch((error) => res.status(400).json({ error }));
};

//Supprimer une sauce
exports.deleteSauce = (req, res, next) => {
  // Récupération de l'objet à supprimer
  Sauce.findOne({ _id: req.params.id })
    .then((sauce) => {
      if (sauce.userId != req.auth.userId) {
        res.status(401).json({ message: "Action non autorisée!" });
      } else {
        const filename = sauce.imageUrl.split("/images/")[1];
        fs.unlink(`images/${filename}`, () => {
          Sauce.deleteOne({ _id: req.params.id })
            .then(() => {
              res.status(200).json({ message: "Sauce supprimé!" });
            })
            .catch((error) => res.status(401).json({ error }));
        });
      }
    })
    .catch((error) => {
      res.status(500).json({ error });
    });
};
//Affichage de toutes les sauces

exports.getAllSauces = (req, res, next) => {
  // On recherche toutes les sauces dans la base de données
  Sauce.find()
    //On les récupère
    .then((sauces) => res.status(200).json(sauces))
    //Message d'erreur si la récupération a échouée
    .catch((error) => res.status(400).json({ error: error }));
};

// Like/Dislike d'une sauce
exports.rateSauce = (req, res, next) => {
  Sauce.findOne({ _id: req.params.id });
  //Si la personne aime la sauce
  if (req.body.like == 1) {
    sauce.like++;
    sauce.userLiked.push(req.body.userId);
    sauce.save();
  }
};
