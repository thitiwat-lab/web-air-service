import * as yup from 'yup'

export const AirSchema = yup
.object()
.shape({
    name_air:yup
    .string()
    .required()
    .label('Name_Air'),
    btu:yup
    .number()
    .required()
    .label('Btu'),
    price: yup
    .number()
    .required()
    .label('Price')
})
.required()
export const UpdateSchema = yup
.object()
.shape({
    price: yup
    .number()
    .required()
    .label('Price')
})
.required()