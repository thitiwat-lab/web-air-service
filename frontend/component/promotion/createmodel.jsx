import React, {useState} from 'react'
import { Button, ModalHeader, ModalFooter, Form } from 'reactstrap'
import classnames from 'classnames'
import { useForm } from 'react-hook-form'
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css"
// internal
import {createPromotion} from '../../schema/promotion'
import {HandleAuth} from '../../service/config'
import {CreatePromotion} from '../../service/promotion'

const ModalFrom = props => {
    const { handleSubmit, register, errors, clearError, setValue } = useForm({
         validationSchema: createPromotion
      })
      const [startDate, setStartDate] = useState(new Date());
      const [endDate, setEndDate] = useState(new Date());
const CloseModal = () => {
    setVal()
    clearError()
    props.CloseModal()
    props.messErr()
}
// setvalue
const setVal = () => {
  setValue('promotion_name', '')
  setValue('description', '')
  setValue('discount', '')
  props.CloseModal()
}

//create
const onSubmit = handleSubmit(async values => {
  try {
      const { data } = await CreatePromotion(
        values.promotion_name,
        values.description,
        values.discount,
        values.start_date,
        values.end_date
      )
      if (data.code === 'OK') {
          props.getPromotion()
        setVal()
      } else {
        props.messErr()
      }
  } catch (error) {
    console.log(error)
    HandleAuth(error)
  }
})
React.useEffect(() => {}, [])
    return(
<div
      className={classnames('modal fade animated', { 'show fadeInDown': props.modal })}
      style={{ display: props.modal ? 'block' : 'none', overflowY: 'auto' }}
    >
      <div className="modal-dialog modal-box-shadown" role="document">
        <div className="modal-content">
          <Form onSubmit={onSubmit}>
            {props.errorMsg && <div className="alert alert-danger">เบอร์โทรศัพท์ของท่านซ้ำ กรุณาเปลี่ยนเบอร์ใหม่</div>}
            <ModalHeader>เพิ่มโปรโมชั่น</ModalHeader>
            <div className="modal-body">
              <div className="row">
                <div className="col-md-12 mt-2">
                  <label htmlFor="Promotion_name" className="mr-sm-2">
                    ชื่อโปรโมชั่น
                  </label>
                  <input
                    type="text"
                    className={classnames('Selectd form-control',{ 'is-invalid': !!errors.promotion_name })}
                    name="promotion_name"
                    id="promotion_name"
                    ref={register}
                  />
                  <div className="invalid-feedback">{errors.promotion_name && errors.promotion_name.message}</div>
                </div>
                <div className="col-md-12">
                  <label htmlFor="Description" className="mr-sm-2 mt-2">
                    รายละเอียด
                  </label>
                  <input
                    type="text"
                    className={classnames('Selectd form-control',{ 'is-invalid': !!errors.description })}
                    name="description"
                    id="description"
                    ref={register}
                  />
                  <div className="invalid-feedback">{errors.description && errors.description.message}</div>
                </div>
                <div className="col-md-12">
                  <label htmlFor="discount" className="mr-sm-2 mt-2">
                    ส่วนลด
                  </label>
                  <input
                    type="text"
                    className={classnames('Selectd form-control',{'is-invalid': !!errors.discount })}
                    name="discount"
                    id="discount"
                    ref={register}
                  />
                  <div className="invalid-feedback">{errors.discount && errors.discount.message}</div>
                </div>
            </div>
            <div className="row mt-2">
              <div className="col-md-6">
                <label htmlFor="start_date">
                  เวลาเริ่ม
                </label>
                <DatePicker
                  className={classnames('Selectd form-control',{ 'is-invalid': !!errors.start_date })}
                  selected={startDate}
                  onChange={date => setStartDate(date)}
                  selectsStart
                  startDate={startDate}
                  endDate={endDate}
                  dateFormat="yyyy/MM/dd"
                />
                <input type="hidden" name="start_date" id="start_date" ref={register} value={startDate} />
                <div className="invalid-feedback">{errors.start_date && errors.start_date.message}</div>
              </div>
              <div className="col-md-6">
                <label htmlFor="end_date">
                  หมดเวลา
                </label>
              <DatePicker
                className={classnames('Selectd form-control',{ 'is-invalid': !!errors.end_date })}
                selected={endDate}
                onChange={date => setEndDate(date)}
                selectsEnd
                startDate={startDate}
                endDate={endDate}
                minDate={startDate}
                dateFormat="yyyy/MM/dd"
              />
              <input type="hidden" name="end_date" id="end_date" value={endDate} ref={register}/>
              <div className="invalid-feedback">{errors.end_date && errors.end_date.message}</div>
              </div>
            </div>
            </div>
            <ModalFooter>
              <Button type="submit" className="btn btn-primary">
                ยืนยัน
              </Button>
              <Button type="button" className="btn btn-light" onClick={CloseModal}>
                ยกเลิก
              </Button>
            </ModalFooter>
          </Form>
        </div>
      </div>
    </div>
    )
}
export default ModalFrom