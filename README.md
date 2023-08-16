# Projet n°5 | Parcours Développeur web | OpenClassrooms

## Hot Takes API | Construisez une API sécurisée pour une application d'avis gastronomiques :hot_pepper:

## Contexte

Ce projet s'inscrit dans le cadre de ma formation de développeuse web chez OpenClassrooms. L'objectif principal est de créer une API sécurisée pour une application d'avis gastronomiques appelée "Hot Takes", qui permettra aux utilisateurs de partager leurs critiques sur différentes sauces piquantes. Ce projet vise à mettre en pratique mes compétences en développement back-end et en sécurité des données.

## Résumé du scénario

Suite à une demande de la marque Piiquante, spécialisée dans les sauces piquantes, je suis chargée de concevoir et de mettre en œuvre l'API nécessaire pour alimenter l'application "Hot Takes". L'application permettra aux utilisateurs de télécharger et d'évaluer des sauces piquantes, en attribuant des likes ou des dislikes. La sécurité des données est une priorité, compte tenu des attaques récentes subies par la marque.

## Tâches à accomplir

- Concevoir et développer une API sécurisée pour l'application "Hot Takes".
- Mettre en œuvre des opérations CRUD (Create, Read, Update, Delete) de manière sécurisée.
- Implémenter un modèle logique de données conforme à la réglementation et aux besoins de l'application.
- Assurer le stockage sécurisé des données, en particulier les mots de passe des utilisateurs.

## Structure du projet

Le projet est organisé de la manière suivante :

- `controllers/` : le dossier contenant les contrôleurs pour les différentes fonctionnalités CRUD.
- `models/` : le dossier contenant les modèles de données conformes à la réglementation.
- `middlewares/` : le dossier contenant les middlewares pour l'authentification et la sécurité des données.
- `routes/` : le dossier contenant les routes API pour chaque fonctionnalité.
- `config/` : le dossier contenant les fichiers de configuration, notamment pour la base de données.
- `index.js` : le point d'entrée de l'application.

## Objectifs d'apprentissage

Les principaux objectifs d'apprentissage pour ce projet sont :

- Mettre en pratique les opérations CRUD (Create, Read, Update, Delete) de manière sécurisée.
- Concevoir et implémenter un modèle logique de données conforme aux réglementations et aux besoins de l'application.
- Assurer un stockage sécurisé des données, en appliquant les pratiques de sécurité conformes au RGPD et à l'OWASP.

## Compétences évaluées

Ce projet évalue les compétences suivantes :

- Mise en œuvre sécurisée des opérations CRUD.
- Conception et implémentation de modèles de données conformes à la réglementation.
- Stockage sécurisé des données, en particulier les informations sensibles des utilisateurs.
- Utilisation d'outils et de bonnes pratiques pour garantir la sécurité de l'API.

# Instructions pour démarrer le projet

## Hot Takes API

Ceci est le serveur back-end pour le projet "Hot Takes" du parcours Développeur web.

### Prérequis back-end

Assurez-vous d'avoir Node.js et `npm` installés localement sur votre machine.

### Installation du back-end

Clonez ce dépôt. À partir du dossier "back" du projet, exécutez `npm install`. Vous pouvez ensuite lancer le serveur avec la commande
`node server`. Le serveur devrait s'exécuter sur `localhost` avec le port par défaut `3000`. Si le serveur s'exécute sur un autre port pour une raison quelconque, le numéro de port sera affiché dans la console au démarrage du serveur, par exemple : `Écoute sur le port 3001`.

Ces étapes permettront de mettre en place et de démarrer le serveur de l'API pour le projet "Hot Takes".
