const Joi = require('joi');

const validator = require('express-joi-validation').createValidator({});

module.exports = {
  getUserValidator: validator.query(
    Joi.object({
      name: Joi.string().required(),
    }),
  ),
  createUserValidator: validator.body(
    Joi.object({
      firstName: Joi.string().required(),
      lastName: Joi.string().required(),
    }),
  ),
  updateUserValidator: validator.body(
    Joi.object({
      firstName: Joi.string().required(),
      lastName: Joi.string().required(),
    }),
  ),
  deleteUserValidator: validator.params(
    Joi.object({
      id: Joi.string().required(),
    }),
  ),
};
