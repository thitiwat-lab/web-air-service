import * as yup from 'yup'

export const MemberSchema = yup 
.object()
.shape({
    firstname: yup
    .string()
    .required()
    .label('FirstName'),
    lastname: yup
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
    .label('Tel')
})
.required()
export const UpdateMemberSchema = yup 
.object()
.shape({
    firstname: yup
    .string()
    .required()
    .label('FirstName'),
    lastname: yup
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
    lat: yup
    .string()
    .required()
    .label('Lat'),
    lng: yup
    .string()
    .required()
    .label('Lng'),
})
.required()
