import * as Joi from '@hapi/joi'

export const AuthLoginValidate = Joi.object()
  .keys({
    email: Joi.string()
      .email()
      .required(),
    password: Joi.string().required(),
  })
  .required()
  export const AuthRegisterValidate = Joi.object()
  .keys({
    email: Joi.string()
    .email()
    .max(100)
    .required(),
    password: Joi.string()
    .min(8)
    .max(30)
    .regex(/^[0-9a-zA-Z]{8,30}$/),
    passwordConfirm: Joi.string()
      .valid(Joi.ref('password'))
      .required(),
    firstname: Joi.string().required(),
    lastname: Joi.string().required(),
    address: Joi.string().required(),
    tel: Joi.string().required(),
})
.required()