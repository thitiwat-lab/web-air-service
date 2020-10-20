import * as Joi from '@hapi/joi'


export const CreateMapsValidate = Joi.object()
.keys({
    firstname: Joi.string().required(),
    lastname: Joi.string().required(),
    address: Joi.string().required(),
    tel: Joi.string().max(10).min(10).required(),
    lat: Joi.string().required(),
    lng: Joi.string().required(),
    // member_id: Joi.string().required(),
})
.required()
export const UpdateMapsValidate = Joi.object()
.keys({
    firstname: Joi.string().required(),
    lastname: Joi.string().required(),
    address: Joi.string().required(),
    tel: Joi.string().max(10).min(10).required(),
    lat: Joi.string().required(),
    lng: Joi.string().required(),
})
.required()