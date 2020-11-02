import React, {useState} from 'react'
import { Button, ModalHeader, ModalFooter, Form } from 'reactstrap'
import classnames from 'classnames'
import { useForm } from 'react-hook-form'


// internal
import {UsersSchema} from '../../schema/user'
import {HandleAuth} from '../../service/config'
import {GetreservationID} from '../../service/reservation'

const Detailuser = props => {
    // const { handleSubmit, register, errors, clearError, setValue } = useForm({
    //     //  validationSchema: UsersSchema
    //   })

const [metadata, setMetadata]=useState({})
const fetchById = async () => {
    try {
      if (props.detailId) {
        const { data } = await GetreservationID(props.detailId)
        if (data.code === 'OK') {
            setMetadata(data.results) 
        }
    }
    } catch (error) {
        console.log(error)
      HandleAuth(error)
    }
  }
React.useEffect(() => {
    fetchById()
}, [props.detailId])
    return(
<div
      className={classnames('modal fade animated', { 'show fadeInDown': props.detailuser })}
      style={{ display: props.detailuser ? 'block' : 'none', overflowY: 'auto' }}
    >
          <div className="modal-dialog">
          <div className="modal-content">
          <div className="modal-header">
        <h5 className="modal-title">แสดงรายละเอียด</h5>
        <button type="button btn-danger" className="btn btn-danger" data-dismiss="modal" aria-label="Close" onClick={props.CloseDetail}>
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
            <div className="modal-body">
              <Form>
                <p><b>ชื่อ : </b> {metadata.firstname}</p>
                <p><b>นามสกุล : </b> {metadata.lastname}</p>
                <p><b>ที่อยู่ : </b> {metadata.address}</p>
                <p><b>เบอร์โทร : </b> {metadata.tel}</p>
                <p><b>จำนวนเครื่องปรับอากาศ : </b> {metadata.amount}</p>
                <p><b>วันที่จองคิว-เลื่อนคิว : </b> {metadata.reservations_date}</p>
                </Form>
                <ModalFooter></ModalFooter>
            </div>
          </div>
        </div>
</div>
    )
}
export default Detailuser