import * as Joi from '@hapi/joi'

export const UsercreateValidate = Joi.object()
.keys({
    email: Joi.string()
    .email()
    .max(100)
    .required(),
    password: Joi.string().regex(/^[0-9a-zA-Z]{8,30}$/),
    passwordConfirm: Joi.string()
      .valid(Joi.ref('password'))
      .required(),
    firstname: Joi.string().required(),
    lastname: Joi.string().required(),
    address: Joi.string().required(),
    tel: Joi.string().max(10).min(10).required(),
    userrights:Joi.string().required(),
})
.required()
export const UserUpdateValidate = Joi.object()
.keys({
    firstname: Joi.string().required(),
    lastname: Joi.string().required(),
    address: Joi.string().required(),
    tel: Joi.string().max(10).min(10).required(),
    status: Joi.string()
    .valid('ใช้งาน','ไม่ใช้งาน')
    .required(),//staff, admin
    userrights: Joi.string().required(),
})
.required()

export const UserUpdateProfile = Joi.object()
.keys({
    firstname: Joi.string().required(),
    lastname: Joi.string().required(),
    address: Joi.string().required(),
    tel: Joi.string().max(10).min(10).required(),
})
.required()
export const Resetps = Joi.object()
.keys({
    password: Joi.string()
    .min(8)
    .max(30)
    .required(),
  passwordConfirm: Joi.string()
    .valid(Joi.ref('password'))
    .required(),
})
.required()