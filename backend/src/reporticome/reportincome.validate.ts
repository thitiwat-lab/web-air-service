import * as Joi from '@hapi/joi'

export const CreateIncomeValidate = Joi.object()
.keys({
    firstname: Joi.string().required(),
    lastname: Joi.string().required(),
    tel: Joi.string().max(10).min(10).required(),
    // NinethousandBTU: Joi.string().required(),
    // TwelvethousandBTU: Joi.string().required(),
    // repair: Joi.string().required(),
    // pricerepair: Joi.string().required(),
    // promotion: Joi.string().required(),
    // sum: Joi.string().required(),
})
.required()

export const UpdateIncomeValidate = Joi.object()
.keys({
    firstname: Joi.string().required(),
    lastname: Joi.string().required(),
    tel: Joi.string().max(10).min(10).required(),
    NinethousandBTU: Joi.string().required(),
    TwelvethousandBTU: Joi.string().required(),
    repair: Joi.string().required(),
    pricerepair: Joi.string().required(),
    promotion: Joi.string().required(),
    sum: Joi.string().required(),
})
.required()

export const UpdateStatuss = Joi.object()
.keys({
    status:Joi.string().required()
})
.required()

