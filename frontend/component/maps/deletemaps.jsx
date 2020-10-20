import React from 'react'
import { Button, ModalHeader, ModalFooter, Form } from 'reactstrap'
import classnames from 'classnames'

import {HandleAuth} from '../../service/config'
import {DeleteMaps} from '../../service/maps'
const DeletedMaps = props => {

    const sevedata = async () => {
        try{
            if(props.delId){
            const {data} = await DeleteMaps(props.delId)
                if(data.code === 'OK'){
                   props.getmaps()
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
        <div className="modal-dialog">
          <div className="modal-content">
            <ModalHeader>ลบพิกัดบ้านลูกค้า</ModalHeader>
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
export default DeletedMaps
