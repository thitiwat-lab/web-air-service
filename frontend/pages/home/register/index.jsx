import React,  {useState} from 'react'
import AuthLayout from '../../../component/layouts/auth'
import { Button, ModalHeader, ModalFooter, Form } from 'reactstrap'
import classnames from 'classnames'
import { useForm } from 'react-hook-form'
import { useRouter } from 'next/router'
// internal
import {RegisterSachema} from '../../../schema/register'
import {RegisterUser} from '../../../service/register'

export default () => {
  const { handleSubmit, register, errors, clearError, setValue } = useForm({
    validationSchema: RegisterSachema
 })
 const [errorMsg, setErrorMsg] = React.useState(false)
 const [errorphone, setErrorphone] = React.useState(false)
// error
const messErr = () => {
  setErrorMsg(true)
}
const PhoneNumber = () =>{
  setErrorphone(true)
}
 // setvalue
const setVal = () => {
  setValue('firstname', '')
  setValue('lastname', '')
  setValue('email', '')
  setValue('password', '')
  setValue('passwordConfirm', '')
  setValue('address', '')
  setValue('tel', '')
}

 //create
const onSubmit = handleSubmit(async values => {
      const { data } = await RegisterUser(
        values.firstname,
        values.lastname,
        values.email,
        values.password,
        values.passwordConfirm,
        values.address,
        values.tel,
      )
      if (data.code === 'OK') {
        clearError()
        routerhelf()
        setVal()
      }else{
        messErr()
      }
    })
    const Router = useRouter()
    const routerhelf = () =>{
        Router.push('/')
    }
React.useEffect(() => {

}, [])
  return (
    <AuthLayout>
    <div className="col-12">
      <div className="row mt-5">
        <div className="col-6"></div>
          <div className="col-3">
            <div className="text-center">
              <h2>Register</h2>
            </div>
            <div className="card">
              <Form onSubmit={onSubmit}>
              {errorMsg && <div className="alert alert-danger">Email or Phone Number Duplicate !</div>}
              {/* {errorphone && <div className="alert alert-danger"> Phone Number Duplicate !</div>} */}
                <div className="card-body">
                  <div className="row">
                    <div className="col-md-6 mt-2">
                      <label htmlFor="firstname" className="mr-sm-2">
                        Firstname
                      </label>
                      <input
                      className={classnames('Selectd form-control form-control-sm',{ 'is-invalid': !!errors.firstname })}
                        type="text"
                        name="firstname"
                        id="firstname"
                        ref={register}
                      />
                  <div className="invalid-feedback">{errors.firstname && errors.firstname.message}</div>
                    </div>
                    <div className="col-md-6 mt-2">
                      <label htmlFor="lastname" className="mr-sm-2">
                        Lastname
                      </label>
                      <input
                        className={classnames('Selectd form-control form-control-sm',{ 'is-invalid': !!errors.lastname })}
                        type="text"
                        name="lastname"
                        id="lastname"
                        ref={register}
                      />
                  <div className="invalid-feedback">{errors.lastname && errors.lastname.message}</div>
                    </div>
                    <div className="col-md-12 mt-2">
                      <label htmlFor="email" className="mr-sm-2">
                        Email
                      </label>
                      <input
                      className={classnames('Selectd form-control form-control-sm',{ 'is-invalid': !!errors.email })}
                        type="text"
                        name="email"
                        id="email"
                        ref={register}
                    />
                      <div className="invalid-feedback">{errors.email && errors.email.message}</div>
                    </div>
                    <div className="col-md-12 mt-2">
                      <label htmlFor="password" className="mr-sm-2">
                        Password
                      </label>
                      <input
                        className={classnames('Selectd form-control form-control-sm',{ 'is-invalid': !!errors.password })}
                        type="password"
                        name="password"
                        id="password"
                        ref={register}
                      />
                      <div className="invalid-feedback">{errors.password && errors.password.message}</div>
                    </div>
                    <div className="col-md-12 mt-2">
                      <label htmlFor="passwordConfirm" className="mr-sm-2">
                        Password Confirm
                      </label>
                      <input
                        className={classnames('Selectd form-control form-control-sm',{ 'is-invalid': !!errors.passwordConfirm })}
                        type="password"
                        name="passwordConfirm"
                        id="passwordConfirm"
                        ref={register}
                      />
                      <div className="invalid-feedback">{errors.passwordConfirm && errors.passwordConfirm.message}</div>
                    </div>
                    <div className="col-md-12 mt-2">
                      <label htmlFor="address" className="mr-sm-2">
                        Address
                      </label>
                      <input
                        className={classnames('Selectd form-control form-control-sm',{ 'is-invalid': !!errors.address })}
                        type="text"
                        name="address"
                        id="address"
                        ref={register}
                      />
                      <div className="invalid-feedback">{errors.address && errors.address.message}</div>
                    </div>
                    <div className="col-md-12 mt-2">
                      <label htmlFor="tel" className="mr-sm-2">
                        tel.
                      </label>
                      <input
                        className={classnames('Selectd form-control form-control-sm',{ 'is-invalid': !!errors.tel})}
                        type="text"
                        name="tel"
                        id="tel"
                        ref={register}
                      />
                      <div className="invalid-feedback">{errors.tel && errors.tel.message}</div>
                    </div>
                  </div>
                  <div className="card-footer bg-white text-center mt-4">
                  <button type="submit" className="btn btn-success btn-block btn-sm">Register</button>
                </div>
              </div>
            </Form>
          </div>
        </div>
      </div>
    </div>
  </AuthLayout>
  )
}
