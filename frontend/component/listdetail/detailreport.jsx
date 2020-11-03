import React, {useState} from 'react'
import { Button, ModalHeader, ModalFooter, Form } from 'reactstrap'
import classnames from 'classnames'
import { useForm } from 'react-hook-form'


// internal
import {UsersSchema} from '../../schema/user'
import {HandleAuth} from '../../service/config'
import {GetIdincome} from '../../service/income'

const Detailreport = props => {
    // const { handleSubmit, register, errors, clearError, setValue } = useForm({
    //     //  validationSchema: UsersSchema
    //   })

const [metadata, setMetadata]=useState({})
const fetchById = async () => {
    try {
      if (props.detailId) {
        const { data } = await GetIdincome(props.detailId)
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
          <div className="modal-dialog modal-box-shadown">
          <div className="modal-content">
          <div className="modal-header">
        <h5 className="modal-title">แสดงรายละเอียด</h5>
        <button type="button" className="btn btn-danger" data-dismiss="modal" aria-label="Close" onClick={props.CloseDetail}>
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
            <div className="modal-body">
              <Form>
                <p><b>ชื่อ : </b> {metadata.firstname}</p>
                <p><b>นามสกุล : </b> {metadata.lastname}</p>
                <p><b>เบอร์โทร : </b> {metadata.tel}</p>
                <p><b>9000-15000BTU : </b> {metadata.NinethousandBTU} เครื่อง</p>
                <p><b>18000-24000BTU : </b> {metadata.TwelvethousandBTU} เครื่อง</p>
                <p><b>ราคาซ่อม: </b> {metadata.pricerepair} บาท</p>
                <p><b>ส่วนลด : </b> {metadata.promotion} บาท</p>
                <p><b>ยอดชำระ : </b> {metadata.sum} บาท</p>
                </Form>
                <ModalFooter></ModalFooter>
            </div>
          </div>
        </div>
</div>
    )
}
export default Detailreport