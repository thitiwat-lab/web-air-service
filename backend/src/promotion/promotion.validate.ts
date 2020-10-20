import * as Joi from '@hapi/joi'

export const CreatePromotionValidate = Joi.object()
.keys({
     promotion_name: Joi.string().required(),
     description: Joi.string().required(),
     discount: Joi.string().required(),
     start_date: Joi.date().required(),
     end_date: Joi.date().required(),
})
.required()

export const UpdatePromotionValidate = Joi.object()
.keys({
    promotion_name: Joi.string().required(),
    description: Joi.string().required(),
    discount: Joi.string().required(),
})
.required()