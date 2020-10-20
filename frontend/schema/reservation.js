import * as yup from 'yup'

export const CreateReservationSchema = yup
.object()
.shape({
    firstname:yup 
    .string()
    .required()
    .label('FirstName'),
    lastname:yup
    .string()
    .required()
    .label('LastName'),
    address: yup
    .string()
    .required()
    .label('Address'),
    tel: yup
    .string()
    .required()
    .label('Tel'),
    amount:yup
    .number()
    .required()
    .label('Amount'),
    reservations_date:  yup
    .date()
    .required()
    .label('Reservations_date'),
})
.required()

export const UpdatereservationSchema = yup
.object()
.shape({
    firstname:yup 
    .string()
    .required()
    .label('FirstName'),
    lastname:yup
    .string()
    .required()
    .label('LastName'),
    address: yup
    .string()
    .required()
    .label('Address'),
    tel: yup
    .string()
    .required()
    .label('Tel'),
    amount:yup
    .number()
    .required()
    .label('Amount'),
    reservations_date:  yup
    .string()
    .required()
    .label('Reservations_date'),
    status: yup.string().required().label('Status')
})
.required()

export const UpdateStatus = yup
.object()
.shape({
    lat: yup.string().required().label('maps'),
    lng: yup.string().required().label('maps'),
    address: yup
    .string()
    .required()
    .label('Address'),
})
.required()
