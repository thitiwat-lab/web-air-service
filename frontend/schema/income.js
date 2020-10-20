import * as yup from 'yup'

export const CreateIncomeSchema = yup.object()
.shape({
    firstname:yup 
    .string()
    .required(),
    // .label('FirstName'),
    lastname:yup
    .string()
    .required(),
    // .label('LastName'),
    tel: yup
    .string()
    .required(),

    // NinethousandBTU: yup
    // .string()
    // .required()
    // .label('NinethousandBTU'),
    // TwelvethousandBTU: yup
    // .string()
    // .required()
    // .label('TwelvethousandBTU'),
    // repair: yup
    // .string()
    // .required()
    // .label('Repair'),
    // pricerepair: yup
    // .string()
    // .required()
    // .label('Pricerepair'),
    // promotion: yup
    // .string()
    // .required()
    // .label('Promotion'),
    // sum: yup
    // .string()
    // .required()
    // .label('Sum')
})
.required()
export const UpdateIncomeSchema = yup.object()
.shape({
    firstname:yup 
    .string()
    .required()
    .label('FirstName'),
    lastname:yup
    .string()
    .required()
    .label('LastName'),
    tel: yup
    .string()
    .required()
    .label('Tel'),
    NinethousandBTU: yup
    .string()
    .required()
    .label('NinethousandBTU'),
    TwelvethousandBTU: yup
    .string()
    .required()
    .label('TwelvethousandBTU'),
    repair: yup
    .string()
    .required()
    .label('Repair'),
    pricerepair: yup
    .string()
    .required()
    .label('Pricerepair'),
    promotion: yup
    .string()
    .required()
    .label('Promotion'),
    sum: yup
    .string()
    .required()
    .label('Sum')
})
.required()

export const UpdateStatusIncomes = yup.object()
.shape({
    status: yup
    .string()
    .required()
    .label('Status')
})
.required()