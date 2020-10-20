import  * as Joi  from '@hapi/joi';

export const NewsCreateValidate = Joi.object()
    .keys({
        // newstitle:Joi.string().required(),
        // detail:Joi.string().required(),
        name:Joi.string().required(),
    })
    .required()
export const NewsUpdateValidate = Joi.object()
    .keys({
        detail:Joi.string().required(),
        name:Joi.string().required(),
    })
    .required()