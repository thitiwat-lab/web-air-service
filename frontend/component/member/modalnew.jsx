import React from 'react'
import { Button, ModalHeader, ModalFooter, Form } from 'reactstrap'
import classnames from 'classnames'
import { useForm } from 'react-hook-form'


// internal
import {MemberSchema} from '../../schema/member'
import {HandleAuth} from '../../service/config'
import {CreateMember} from '../../service/member'

const ModalFromnew = props => {
    const { handleSubmit, register, errors, clearError, setValue } = useForm({
         validationSchema: MemberSchema
      })
const CloseModal = () => {
    setVal()
    clearError()
}
// setvalue
const setVal = () => {
  setValue('firstname', '')
  setValue('lastname', '')
  setValue('address', '')
  setValue('tel', '')
  props.CloseModal1()
}

//create
const onSubmit = handleSubmit(async values => {
  try {
      const { data } = await CreateMember(
        values.firstname,
        values.lastname,
        values.address,
        values.tel,
      )
      if (data.code === 'OK') {
        props.getmember()
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
      className={classnames('modal fade animated', { 'show fadeInDown': props.modal1 })}
      style={{ display: props.modal1 ? 'block' : 'none', overflowY: 'auto' }}
    >
      <div className="modal-dialog modal-box-shadown" role="document">
        <div className="modal-content">
          <Form onSubmit={onSubmit}>
            {props.errorMsg && <div className="alert alert-danger">เบอร์โทรศัพท์ของท่านซ้ำ กรุณาเปลี่ยนเบอร์ใหม่</div>}
            <ModalHeader>เพิ่มสมาชิก</ModalHeader>
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
                    เบอร์โทร
                  </label>
                  <input
                    type="tel"
                    className={classnames('Selectd form-control',{ 'is-invalid': !!errors.tel })}
                    name="tel"
                    id="tel"
                    ref={register}
                  />
                  <div className="invalid-feedback">{errors.tel && errors.tel.message}</div>
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
export default ModalFromnew