import React from 'react'
import { useForm } from 'react-hook-form'
import { Button, ModalHeader, ModalFooter, Form } from 'reactstrap'
import classnames from 'classnames'

// internal 
import {DeleteNews} from '../../service/news'
import {HandleAuth} from '../../service/config'

const DeleteNewss = props => {

    const sevedata = async () => {
        try{
            if(props.delId){
            const {data} = await DeleteNews(props.delId)
                if(data.code === 'OK'){
                }
                props.getnews()
                props.CloseDelete()
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
            <ModalHeader>ลบสมาชิก</ModalHeader>
            <div className="modal-body">
              <Form>
                <p style={{ textAlign: 'center', fontSize: '18px' }}>
                  <i className="far fa-trash-alt"></i> คุณแน่ใจหรือไม่ ?
                </p>
              </Form>
              <ModalFooter>
                <Button className="btn btn-danger" onClick={sevedata}>
                  ใช่
                </Button>
                <Button className="btn" onClick={props.CloseDelete} >
                    ไม่
                </Button>
              </ModalFooter>
            </div>
          </div>
        </div>
      </div>
    )
}
export default DeleteNewss