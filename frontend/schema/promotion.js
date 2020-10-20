import * as yup from 'yup'

export const createPromotion = yup
.object()
.shape({
    promotion_name:yup 
    .string()
    .required()
    .label('Promotion_name'),
    description:yup
    .string()
    .required()
    .label('Description'),
    discount: yup
    .string()
    .required()
    .label('Discount'),
    start_date: yup
    .date()
    .required()
    .label('start_date'),
    end_date: yup
    .date()
    .required()
    .label('end_date'),
})
.required()

export const updatePromotion = yup
.object()
.shape({
    promotion_name:yup 
    .string()
    .required()
    .label('Promotion_name'),
    description:yup
    .string()
    .required()
    .label('Description'),
    discount: yup
    .string()
    .required()
    .label('Discount'),
})
.required()