import React from 'react'
import { Button, ModalHeader, ModalFooter, FormGroup } from 'reactstrap'
import classnames from 'classnames'

// internal
import {HandleAuth} from '../../service/config'
import {deleteAir} from '../../service/airconditioning'

const DeleteAir = props =>{
    const sevedata = async () => {
        try {
          if (props.delId) {
            const { data } = await deleteAir(props.delId)
            if (data.code === 'OK') {
              props.GetAirs()
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
        <div className="modal-dialog modal-box-shadown">
          <div className="modal-content">
            <ModalHeader>Delete Aircoditioning</ModalHeader>
            <div className="modal-body">
              <FormGroup>
                <p style={{ textAlign: 'center', fontSize: '18px' }}>
                  <i className="far fa-trash-alt"></i> Are you sure?
                </p>
              </FormGroup>
              <ModalFooter>
                <Button className="btn btn-danger " onClick={sevedata}>
                  Yes
                </Button>
                <Button onClick={props.CloseDelete}>No</Button>
              </ModalFooter>
            </div>
          </div>
        </div>
      </div>
    )
}
export default DeleteAir 
