import * as Joi from '@hapi/joi'

export const CreateMemberValidate = Joi.object()
.keys({
    firstname: Joi.string().required(),
    lastname: Joi.string().required(),
    address: Joi.string().required(),
    tel: Joi.string().max(10).min(10).required(),
    // coordinates:Joi.string().requird()
})
.required()

export const UpdateMemberValidate = Joi.object()
.keys({
    firstname: Joi.string().required(),
    lastname: Joi.string().required(),
    address: Joi.string().required(),
    tel: Joi.string().max(10).min(10).required(),
    lat: Joi.string().required(),
    lng: Joi.string().required(),
})
.required()