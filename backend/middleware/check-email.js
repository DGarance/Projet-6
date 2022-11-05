const emailValidator = require("email-validator");

module.exports = (req, res, next) => {
  if (!emailValidator.validate(req.body.email)) {
    res.statusMessage = `L'e-mail ${req.body.email} n'est pas valide`;
    return res.status(400).send();
  }
  next();
};
