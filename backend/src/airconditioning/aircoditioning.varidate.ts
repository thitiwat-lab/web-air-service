import * as Joi from '@hapi/joi'

export const CreateAir = Joi.object()
.keys({
    name_air:Joi.string().required(),
    btu:Joi.number().required(),
    price:Joi.number().required(),
})
.required()

export const UpdateAir = Joi.object()
.keys({
    price:Joi.number().required(),
})
.required()