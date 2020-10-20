import * as yup from 'yup'

export const CreateSchema = yup.object()
.shape({
    name: yup.string()
    .required()
    .label('name')
})
.required()

export const UpdateSchema = yup.object()
.shape({
    name: yup.string()
    .required()
    .label('name')
})
.required()