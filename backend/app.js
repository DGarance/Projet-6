// Importation du package Express
const express = require("express");
//Importation du package BodyParser
const bodyParser = require("body-parser");
//Appel de la méthode Express
const app = express();
//Importation du package Mongoose
const mongoose = require("mongoose");

const path = require("path");

const dotenv = require("dotenv");
dotenv.config();
//Connexion à la base de données MongoDB avec id et password
mongoose
  .connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connexion à MongoDB réussie !"))
  .catch(() => console.log("Connexion à MongoDB échouée !"));

//Insertion des CORS ()
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content, Accept, Content-Type, Authorization"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, PATCH, OPTIONS"
  );
  next();
});

app.use(bodyParser.json());

const userRoutes = require("./routes/user");
const sauceRoutes = require("./routes/sauces");

app.use("/images", express.static(path.join(__dirname, "images")));
app.use("/api/auth", userRoutes);
app.use("/api/sauces", sauceRoutes);

module.exports = app;
