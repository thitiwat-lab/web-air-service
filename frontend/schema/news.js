import * as yup from 'yup'

export const NewsSchema = yup
.object()
.shape({
    // newstitle: yup
    // .string()
    // .label('Newstitle'),
    // detail: yup
    // .string()
    // .label('Detail'),
    name: yup
    .string()
    // .required()
    .label('name')
})
.required()

export const UdateNewsSchema = yup
.object()
.shape({
    // newstitle: yup
    // .string()
    // .required()
    // .label('Newstitle'),
    // detail: yup
    // .string()
    // .required()
    // .label('detail'),
    name: yup
    .string()
    .required()
    .label('name')
})
.required()