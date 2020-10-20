import * as yup from 'yup'

export const LoginSchema = yup
  .object()
  .shape({
    email: yup
      .string()
      .email()
      .required()
      .label('Email address'),
    password: yup
      .string()
      .required()
      .label('Password')
  })
  .required()
