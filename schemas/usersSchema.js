import Joi from "joi";

const usersSchema = {
  create: Joi.object().keys({
    name: Joi.string()
      .min(3)
      .max(30)
      .required(),
    lastName: Joi.string()
      .min(3)
      .max(30)
      .required(),
    password: Joi.string()
      .min(3)
      .max(10)
      .required(),
    email: Joi.string().email().required(),
  }).options({ abortEarly: false }),

  update: Joi.object().keys({
    id: Joi.number().required(),
    name: Joi.string()
      .min(3)
      .max(30)
      .required(),
    lastName: Joi.string()
      .min(3)
      .max(30)
      .required(),
    password: Joi.string()
      .min(3)
      .max(10)
      .required(),
    email: Joi.string().email().required(),
  }).options({ abortEarly: false }),

  login: Joi.object().keys({
    email: Joi.string().email().required(),
    password: Joi.string()
      .min(3)
      .max(10)
      .required(),
  }),

  delete: Joi.object().keys({
    id: Joi.number().required(),
  }).options({ abortEarly: false }),
}


export default usersSchema;

