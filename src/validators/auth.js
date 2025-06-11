const Joi = require("joi");
const validatorHandler = require("../middlewares/validatorHandler");

const signUp = (req, res, next) => {
  const schema = Joi.object().keys({
    firstName: Joi.string().trim().alphanum().min(3).max(50).required(),
    lastName: Joi.string().trim().alphanum().min(3).max(50).required(),
    email: Joi.string().trim().email().required(),
    password: Joi.string()
      .trim()
      .pattern(new RegExp("^[a-zA-Z0-9]{6,30}$"))
      .required(),
  });
  validatorHandler(req, res, next, schema);
};

const signin = (req, res, next) => {
  const schema = Joi.object().keys({
    email: Joi.string().trim().email().required(),
    password: Joi.string()
      .trim()
      .pattern(new RegExp("^[a-zA-Z0-9]{6,30}$"))
      .required(),
  });
  validatorHandler(req, res, next, schema);
};

module.exports = {
  signUp,
  signin,
};
