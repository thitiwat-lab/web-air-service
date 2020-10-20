import * as yup from 'yup'

export const Userspassword = yup
  .object()
  .shape({
    password: yup
    .string()
    .matches(/^[0-9a-zA-Z]{8,30}$/)
    .required()
    .label('password'),
  passwordConfirm: yup
    .string()
    .oneOf([yup.ref('password')])
    .required(),
  })
  .required()
