import * as yup from 'yup'

export const RegisterSachema = yup
  .object()
  .shape({
    firstname: yup
      .string()
      .required()
      .label('firstname'),
    lastname: yup
      .string()
      .required()
      .label('lastname'),
    email: yup
      .string()
      .required()
      .label('email'),
    password: yup
      .string()
      .matches(/^[0-9a-zA-Z]{8,30}$/)
      .required()
      .label('password'),
    passwordConfirm: yup
      .string()
      .oneOf([yup.ref('password')])
      .required(),
    address: yup
    .string()
    .required()
    .label('address'),
    tel: yup
    .string()
    .required()
    .label('tel')
  })
  .required()