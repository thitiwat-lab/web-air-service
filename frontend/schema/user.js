import * as yup from 'yup'

export const UsersSchema = yup
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
    email: yup
      .string()
      .required()
      .label('Email'),
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
    .label('Address'),
    tel: yup
    .string()
    .required()
    .label('Tel'),
    userrights: yup 
    .string()
    .required()
    .label('userrights'),
  })
  .required()
  export const UserSchemaUpdate = yup
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
    // password: yup
    //   .string()
    //   .matches(/^[0-9a-zA-Z]{8,30}$/)
    //   .required()
    //   .label('password'),
    // passwordConfirm: yup
    //   .string()
    //   .oneOf([yup.ref('password')])
    //   .required(),
    address: yup
      .string()
      .required()
      .label('Address'),
    tel: yup
      .string()
      .required()
      .label('Tel'),
    status: yup
      .string()
      .required()
      .label('Status'),
    userrights: yup 
      .string()
      .required()
      .label('userrights'),
  })
  .required()
  export const SchemaUpdate = yup
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
      
  })
  .required()