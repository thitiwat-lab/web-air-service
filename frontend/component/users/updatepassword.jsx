import React from 'react'
import { useForm } from 'react-hook-form'
import { Button, ModalHeader, ModalFooter, Form } from 'reactstrap'
import classnames from 'classnames'

import {Userspassword} from '../../schema/updatepassword'
import {Updatepassword, updateprofile, Getuser} from '../../service/users'
import {HandleAuth} from '../../service/config'

const Updatepass = props => {
    const { handleSubmit, register, errors, setValue, clearError } = useForm({
        validationSchema: Userspassword,
      })

      const Close = () =>{
        clearError()
        setValue('password', '')
        setValue('passwordConfirm', '')
        props.Closeupdatepass()
      }

      const onSumit = handleSubmit(async (value)=>{
        try{
        if(props.passid){
                const {data} = await Updatepassword(props.passid, value)
                if(data.code === 'OK'){
                  props.GetUser()
                  Close()
                }
            }
        }catch (error) {
            HandleAuth(error)
          }
    })
      React.useEffect(() =>{
      },[])
   return(
<div
      className={classnames('modal fade animated', { 'show fadeInDown': props.modalpass })}
      style={{ display: props.modalpass ? 'block' : 'none', overflowY: 'auto' }}
    >
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <Form onSubmit={onSumit} >
            <ModalHeader>แก้ไขรหัสผ่านพนักงาน</ModalHeader>
            <div className="modal-body">
              <div className="row">
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
export default Updatepass