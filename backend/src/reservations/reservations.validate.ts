import * as Joi from '@hapi/joi'

export const ReservationValidate = Joi.object()
.keys({
    firstname: Joi.string().required(),
    lastname: Joi.string().required(),
    address: Joi.string().required(),
    tel: Joi.string().required(),
    amount:Joi.number().required(),
    reservations_date:Joi.date().required(),
    // lat:Joi.number().required(),
    // lng:Joi.string().required(),
    // price:Joi.number().required(),
    // btu:Joi.string().required(),
    // status:Joi.string().required(),
})
.required()
export const UpdateReservation = Joi.object()
.keys({
    firstname: Joi.string().required(),
    lastname: Joi.string().required(),
    address: Joi.string().required(),
    tel: Joi.string().required(),
    amount:Joi.number().required(),
    status:Joi.string().required(),//ระหว่างดำเนินการ ล้างแล้ว เลื่อนคิว 
    reservations_date:Joi.date().required(),
})
.required()

export const Updatemaps =Joi.object()
.keys({
    lat:Joi.string().required(),
    lng:Joi.string().required(),
    address: Joi.string().required(),
})
.required()