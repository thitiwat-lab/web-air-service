import React from 'react'
import { Button, ModalHeader, ModalFooter, FormGroup } from 'reactstrap'
import classnames from 'classnames'

// internal
import {deleteOne} from '../../service/users'
import {HandleAuth} from '../../service/config'
const DeleteUsers = props => {
    const sevedata = async () => {
        try {
          if (props.delId) {
            const { data } = await deleteOne(props.delId)
            if (data.code === 'OK') {
              props.GetUser()
              props.CloseDelete()
            }
          }
        } catch (error) {
          HandleAuth(error)
        }
      }
    return (
        <div
        className={classnames('modal fade animated', { 'show fadeInDown': props.delet })}
        style={{ display: props.delet ? 'block' : 'none' }}
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <ModalHeader>ลบพนักงาน</ModalHeader>
            <div className="modal-body">
              <FormGroup>
                <p style={{ textAlign: 'center', fontSize: '18px' }}>
                  <i className="far fa-trash-alt"></i> คุณแน่ใจหรือไม่ ?
                </p>
              </FormGroup>
              <ModalFooter>
                <Button className="btn btn-danger " onClick={sevedata}>
                  ใช่
                </Button>
                <Button onClick={props.CloseDelete}>ไม่</Button>
              </ModalFooter>
            </div>
          </div>
        </div>
      </div>
    )
}
export default DeleteUsers