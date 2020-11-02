import React from 'react'
import { Button, ModalHeader, ModalFooter, Form } from 'reactstrap'
import classnames from 'classnames'
import { useForm } from 'react-hook-form'


// internal
import {UsersSchema} from '../../schema/user'
import {HandleAuth} from '../../service/config'
import {Createuser} from '../../service/users'

const ModalFrom = props => {
    const { handleSubmit, register, errors, clearError, setValue } = useForm({
         validationSchema: UsersSchema
      })
const CloseModal = () => {
    setVal()
    clearError()
    props.CloseModal()
    props.messErr()
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
  setValue('userrights', '')
  props.CloseModal()
}

//create
const onSubmit = handleSubmit(async values => {
  try {
      const { data } = await Createuser(
        values.firstname,
        values.lastname,
        values.email,
        values.password,
        values.passwordConfirm,
        values.address,
        values.tel,
        values.userrights
      )
      if (data.code === 'OK') {
        props.GetUser()
        setVal()
      } else {
        props.messErr()
      }
  } catch (errors) {
    HandleAuth(errors)
  }
})
React.useEffect(() => {}, [])
    return(
<div
      className={classnames('modal fade animated', { 'show fadeInDown': props.modal })}
      style={{ display: props.modal ? 'block' : 'none', overflowY: 'auto' }}
    >
      <div className="modal-dialog modal-box-shadown" role="document">
        <div className="modal-content">
          <Form onSubmit={onSubmit}>
            {props.errorMsg && <div className="alert alert-danger">อีเมล หรือ เบอร์โทรซ้ำกัน !</div>}
            <ModalHeader>เพิ่มพนักงาน</ModalHeader>
            <div className="modal-body">
              <div className="row">
                <div className="col-md-6 mt-2">
                  <label htmlFor="firstname" className="mr-sm-2">
                    ชื่อ
                  </label>
                  <input
                    type="text"
                    className={classnames('Selectd form-control',{ 'is-invalid': !!errors.firstname })}
                    name="firstname"
                    id="firstname"
                    ref={register}
                  />
                  <div className="invalid-feedback">{errors.firstname && errors.firstname.message}</div>
                </div>
                <div className="col-md-6">
                  <label htmlFor="lastname" className="mr-sm-2 mt-2">
                    นามสกุล
                  </label>
                  <input
                    type="text"
                    className={classnames('Selectd form-control',{ 'is-invalid': !!errors.lastname })}
                    name="lastname"
                    id="lastname"
                    ref={register}
                  />
                  <div className="invalid-feedback">{errors.lastname && errors.lastname.message}</div>
                </div>
                <div className="col-md-12">
                  <label htmlFor="email" className="mr-sm-2 mt-2">
                    อีเมล
                  </label>
                  <input
                    type="text"
                    className={classnames('Selectd form-control',{ 'is-invalid': !!errors.email })}
                    name="email"
                    id="email"
                    ref={register}
                  />
                  <div className="invalid-feedback">{errors.email && errors.email.message}</div>
                </div>
                <div className="col-md-12">
                  <label htmlFor="password" className="mr-sm-2 mt-2">
                    รหัสผ่าน
                  </label>
                  <input
                    type="password"
                    className={classnames('Selectd form-control',{ 'is-invalid': !!errors.password })}
                    name="password"
                    id="password"
                    ref={register}
                  />
                  <div className="invalid-feedback">{errors.password && errors.password.message}</div>
                </div>
                <div className="col-md-12">
                  <label htmlFor="passwordConfirm" className="mr-sm-2 mt-2">
                    ยืนยันรหัสผ่าน
                  </label>
                  <input
                    type="password"
                    className={classnames('Selectd form-control',{ 'is-invalid': !!errors.passwordConfirm })}
                    name="passwordConfirm"
                    id="passwordConfirm"
                    ref={register}
                  />
                  <div className="invalid-feedback">{errors.passwordConfirm && errors.passwordConfirm.message}</div>
                </div>
                <div className="col-md-12">
                  <label htmlFor="address" className="mr-sm-2 mt-2">
                    ที่อยู่
                  </label>
                  <input
                    type="text"
                    className={classnames('Selectd form-control',{ 'is-invalid': !!errors.address })}
                    name="address"
                    id="address"
                    ref={register}
                  />
                  <div className="invalid-feedback">{errors.address && errors.address.message}</div>
                </div>
                <div className="col-md-12">
                  <label htmlFor="tel" className="mr-sm-2 mt-2">
                    เบอร์โทรศัพท์
                  </label>
                  <input
                    type="text"
                    className={classnames('Selectd form-control',{ 'is-invalid': !!errors.tel })}
                    name="tel"
                    id="tel"
                    ref={register}
                  />
                  <div className="invalid-feedback">{errors.tel && errors.tel.message}</div>
              </div>
              <div className="col-md-12">
                  <label htmlFor="userrights" className="mr-sm-2 mt-2">
                    สิทธิการใช้งาน
                  </label>
                 <select className="Selectd form-control" name="userrights" id="userrights" ref={register} >
                   <option value="admin">admin(ผู้ดูแลระบบ)</option>
                   <option value="officer">officer(พนักงานประจำสาขา)</option>
                   <option value="staff">staff(พนักงานภาคสนาม)</option>
                 </select>
                  <div className="invalid-feedback">{errors.userrights && errors.userrights.message}</div>
                </div>
                </div>
              </div>
            
            <ModalFooter>
              <Button type="submit" className="btn btn-primary">
                ยืนยัน
              </Button>
              <Button type="button" className="btn btn-light" onClick={CloseModal} >
                ยกเลิก
              </Button>
            </ModalFooter>
          </Form>
        </div>
      </div>
    </div>
    )
}
export default ModalFrom