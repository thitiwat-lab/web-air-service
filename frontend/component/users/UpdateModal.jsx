import React from 'react'
import { useForm } from 'react-hook-form'
import { Button, ModalHeader, ModalFooter, Form } from 'reactstrap'
import classnames from 'classnames'

//internal
import {UserSchemaUpdate} from '../../schema/user'
import {HandleAuth} from '../../service/config'
import {GetidUser, UpdateUser} from '../../service/users'

const UpdateModal = props => {
  const { handleSubmit, register, errors, setValue, clearError } = useForm({
    validationSchema: UserSchemaUpdate,
  })
    const fetchById = async () => {
      try {
        if (props.userId) {
          const { data } = await GetidUser(props.userId)
          if (data.code === 'OK') {
            setValue('firstname', data.result.firstname)
            setValue('lastname', data.result.lastname)
            setValue('address', data.result.address)
            setValue('tel', data.result.tel)
            setValue('userrights', data.result.userrights)
            setValue('status', data.result.status)
          } else {
            props.messErr()
          }
        }
      } catch (error) {
        HandleAuth(error)
      }
    }
    const Close = () => {
      clearError()
      setValue('firstname', '')
      setValue('lastname', '')
      setValue('address', '')
      setValue('tel', '')
      setValue('status', '')
      setValue('userrights', '')
      props.Closeupdate()
    }
    const onSubmit = handleSubmit(async (value) => {
      if (props.userId) {
        try {
          const { data } = await UpdateUser(props.userId, value)
         if(data.code === 'OK'){
            props.GetUser()
            clearError()
            props.Closeupdate()
         }
        } catch (error) {
          HandleAuth(error)
        }
      }
    })
    React.useEffect(() => {
      fetchById()
    }, [props.userId])
  
    return(
<div
      className={classnames('modal fade animated', { 'show fadeInDown': props.modalupdate })}
      style={{ display: props.modalupdate ? 'block' : 'none', overflowY: 'auto' }}
    >
      <div className="modal-dialog modal-box-shadown" role="document">
        <div className="modal-content">
          <Form onSubmit={onSubmit}>
            <ModalHeader>แก้ไขข้อมูลพนักงาน</ModalHeader>
            <div className="modal-body">
              <div className="row">
                <div className="col-md-6 mt-2">
                  <label htmlFor="Firstname" className="mr-sm-2">
                    ชื่อ
                  </label>
                  <input
                    type="text"
                    className={classnames('Selectd form-control', { 'is-invalid': !!errors.firstname })}
                    name="firstname"
                    id="Firstname"
                    ref={register}
                  />
                  <div className="invalid-feedback">{errors.firstname && errors.firstname.message}</div>
                </div>
                <div className="col-md-6">
                  <label htmlFor="Lastname" className="mr-sm-2 mt-2">
                    นามสกุล
                  </label>
                  <input
                    type="text"
                    className={classnames('Selectd form-control', { 'is-invalid': !!errors.lastname })}
                    name="lastname"
                    id="Lastname"
                    ref={register}
                  />
                  <div className="invalid-feedback">{errors.lastname && errors.lastname.message}</div>
                </div>
                <div className="col-md-12">
                  <label htmlFor="Address" className="mr-sm-2 mt-2">
                    ที่อยู่
                  </label>
                  <input
                    type="text"
                    className={classnames('Selectd form-control', { 'is-invalid': !!errors.address })}
                    name="address"
                    id="Address"
                    ref={register}
                  />
                  <div className="invalid-feedback">{errors.address && errors.address.message}</div>
                </div>
                {/* <div className="col-md-12">
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
                </div> */}
                <div className="col-md-12">
                  <label htmlFor="Tel" className="mr-sm-2 mt-2">
                    เบอร์โทรศัพท์
                  </label>
                  <input
                    type="text"
                    className={classnames('Selectd form-control', { 'is-invalid': !!errors.tel })}
                    name="tel"
                    id="Tel"
                    ref={register}
                  />
                  <div className="invalid-feedback">{errors.tel && errors.tel.message}</div>
                </div>
                <div className="col-md-12">
                  <label htmlFor="Status" className="mr-sm-2 mt-2">
                    สถานะ
                  </label>
                  <select name="status" className="form-control" id="Status" ref={register}>
                    <option value="use">use(ใช้งาน)</option>
                    <option value="notuse">not use(ไม่ใช้งาน)</option>
                  </select>
                  <div className="invalid-feedback">{errors.status && errors.status.message}</div>
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
              <Button type="button" className="btn btn-light" onClick={Close} >
                ยกเลิก
              </Button>
            </ModalFooter>
          </Form>
        </div>
      </div>
    </div>
    )
}

export default UpdateModal