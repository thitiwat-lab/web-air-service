import * as Joi from '@hapi/joi'

export const BannerCreateValidate = Joi.object()
.keys({
    name: Joi.string().required()
})
.required()

export const BannerUpdateValidate = Joi.object()
.keys({
    name: Joi.string().required()
})
.required()