import React from 'react'
import { useForm } from 'react-hook-form'
import { Button, ModalHeader, ModalFooter, Form } from 'reactstrap'
import classnames from 'classnames'

// internal 
import {DeletedMember} from '../../service/member'
import {HandleAuth} from '../../service/config'

const Deletedmember = props => {

    const sevedata = async () => {
        try{
            if(props.delId){
            const {data} = await DeletedMember(props.delId)
                if(data.code === 'OK'){
                    props.getmember()
                    props.CloseDelete()
                }
            }
        }catch (error) {
          HandleAuth(error)
        }
    }
    return(
        <div
        className={classnames('modal fade animated', { 'show fadeInDown': props.delet })}
        style={{ display: props.delet ? 'block' : 'none' }}
      >
        <div className="modal-dialog modal-box-shadown">
          <div className="modal-content">
            <ModalHeader>ลบสมาชิก</ModalHeader>
            <div className="modal-body">
              <Form>
                <p style={{ textAlign: 'center', fontSize: '18px' }}>
                  <i className="far fa-trash-alt"></i> คุณแน่ใจหรือไม่ ?
                </p>
              </Form>
              <ModalFooter>
                <Button className="btn btn-danger" onClick={sevedata} >
                  ใช่
                </Button>
                <Button className="btn" onClick={props.CloseDelete}>
                    ไม่
                </Button>
              </ModalFooter>
            </div>
          </div>
        </div>
      </div>
    )
}
export default Deletedmember
