import React, {useState} from 'react'
import { Button, ModalHeader, ModalFooter, Form } from 'reactstrap'
import classnames from 'classnames'
import { useForm } from 'react-hook-form'
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css"
import setHours from "date-fns/setHours";
import setMinutes from "date-fns/setMinutes";

import {HandleAuth} from '../../service/config'
import {UpdateReservation} from '../../service/reservation'
import {UpdatereservationSchema} from '../../schema/reservation'
import {GetreservationID} from '../../service/reservation'
import {CreateIncome, GetIncome} from '../../service/income'
import {CreateIncomeSchema} from '../../schema/income'

const UpdateModal = props =>{
    const { handleSubmit, register, errors, setValue, clearError } = useForm({
        validationSchema: CreateIncomeSchema, UpdatereservationSchema
      })
      const [income, setIncome] = useState([])
      const [startDate, setStartDate] = useState(
        setHours(setMinutes(new Date(), 30), 16)
      );
      // get data income
      const getIncomes = async () =>{
        try{
          const {data} = await GetIncome()
          if(data.code === 'OK'){
            setIncome(data.results)
          }
        }catch(error){
          HandleAuth(error)
        }
      }
      const fetchById = async () => {
        try {
          if (props.updateId) {
            const { data } = await GetreservationID(props.updateId)
            if (data.code === 'OK') {
                setValue('firstname', data.results.firstname)
                setValue('lastname', data.results.lastname)
                setValue('address', data.results.address)
                setValue('tel', data.results.tel)
                setValue('amount', data.results.amount)
                setValue('reservations_date', data.results.reservations_date)
                setValue('status', data.results.status)
            } else {
              props.messErr()
            }
          }
        } catch (error) {
          HandleAuth(error)
        }
      }

    const Closeupdate = () =>{
        clearError()
        props.Closeupdate()
    }
    const Submit = handleSubmit(async (value) =>{
        if(props.updateId){
          try{
            const {data} = await UpdateReservation(props.updateId, value)
            if(data.code === 'OK'){
              if(value.status === 'ล้างแล้ว'){
                const {data} = await CreateIncome(
                  value.firstname,
                  value.lastname,
                  value.tel,
                )
                if(data.code === 'OK'){
                  clearError()
                  getIncomes()      
                  props.getResrvation()
                  props.Closeupdate()
                }
              }else{
                props.getResrvation()
                Closeupdate()
              }
            }else {
              props.messErr()
            }
          } catch (error) {
            HandleAuth(error)
          }
        }
      })
      React.useEffect(() => {
        getIncomes()
        fetchById()
      },[props.updateId])
    return(
            <div
          className={classnames('modal fade animated', { 'show fadeInDown': props.modalupdate })}
          style={{ display: props.modalupdate ? 'block' : 'none', overflowY: 'auto' }}
        >
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <Form  onSubmit={Submit} >
                <ModalHeader>เลื่อนเวลาจองคิว</ModalHeader>
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
                                disabled
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
                                disabled
                              />
                              <div className="invalid-feedback">{errors.lastname && errors.lastname.message}</div>
                            </div>
                          <div className="col-md-12">
                              <label htmlFor="tel" className="mr-sm-2 ">
                                  เบอร์โทรศัพท์
                              </label>
                              <input
                                type="tel"
                                className={classnames('Selectd form-control',{ 'is-invalid': !!errors.tel })}
                                name="tel"
                                id="tel"
                                ref={register}
                                disabled
                              />
                               <div className="invalid-feedback">{errors.tel && errors.tel.message}</div>
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
                                disabled
                              />
                              <div className="invalid-feedback">{errors.address && errors.address.message}</div>
                            </div>
                            <div className="col-md-12">
                                <label htmlFor="amount" className="mr-sm-2 mt-2">
                                    จำนวนเครื่อง
                                </label>
                                <input
                                    type="text"
                                    className={classnames('Selectd form-control',{ 'is-invalid': !!errors.amount })}
                                    name="amount"
                                    id="amount"
                                    ref={register}
                                />
                                <div className="invalid-feedback">{errors.amount && errors.amount.message}</div>
                            </div>
                            <div className="row mt-2">
                        <label htmlFor="reservations_date" className="ml-3">
                              วันที่จองคิว
                            </label>
                          <div className="col-md-12">
                              <DatePicker
                                className={classnames('Selectd form-control date-picker-time',{ 'is-invalid': !!errors.reservations_date })}
                                selected={startDate}
                                onChange={date => setStartDate(date)}
                                showTimeSelect
                                timeFormat="'T'HH:mm"
                                injectTimes={[
                                  setHours(setMinutes(new Date(), 1), 0),
                                  setHours(setMinutes(new Date(), 5), 12),
                                  setHours(setMinutes(new Date(), 59), 23)
                                ]}
                                dateFormat="yyyy/MM/dd'T'HH:mm:ss'Z'"
                              />
                              <input
                                type="hidden"
                                name="reservations_date"
                                id="reservations_date"
                                ref={register}
                                value={startDate}
                              />
                              <div className="invalid-feedback">{errors.reservations_date && errors.reservations_date.message}</div>
                            </div>
                        </div>
                          <div className="col-md-12">
                              <label htmlFor="Status" className="mr-sm-2 mt-2">
                                สถานะ
                              </label>
                              <select name="status" id="status"  ref={register} className={classnames('Selectd form-control',{ 'is-invalid': !!errors.status })}>
                                  <option value="อยู่ระหว่างดำเนินการ">อยู่ระหว่างดำเนินการ</option>
                                  <option value="ล้างแล้ว">ล้างแล้ว</option>
                                  <option value="ยกเลิกการจองคิว">ยกเลิกการจองคิว</option>
                              </select>
                              <div className="invalid-feedback">{errors.status && errors.address.status}</div>
                        </div>
                    </div>
                </div>
              <ModalFooter>
                  <Button type="submit" className="btn btn-primary" >
                      ยืนยัน
                  </Button>
                  <Button type="button" className="btn btn-light" onClick={Closeupdate}>
                      ยกเลิก
                  </Button>
                  </ModalFooter>
                </Form>
            </div>
          </div>
        </div>
    )
}
export default UpdateModal