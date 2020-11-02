import React, {useState, Component} from 'react'
import { Button, ModalHeader, ModalFooter, Form } from 'reactstrap'
import classnames from 'classnames'
import { useForm } from 'react-hook-form'


// internal
import {Createreservation} from '../../service/reservation'
import {HandleAuth} from '../../service/config'
import {CreateReservationSchema} from '../../schema/reservation'
import {GetOne} from '../../service/member'
import {Getmapsone} from '../../service/maps'
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css"
import setHours from "date-fns/setHours";
import setMinutes from "date-fns/setMinutes";

const ModalFrom = props => {
    const { handleSubmit, register, errors, clearError, setValue } = useForm({
        validationSchema: CreateReservationSchema
     })
     const [inputvalue, setInputvalue] = useState({})
     const [searchdata, setSearchdata] =useState({})
     const [startDate, setStartDate] = useState(
      setHours(setMinutes(new Date(), 30), 16)
    );

     const handle =  (event) => {
      setInputvalue({...inputvalue, [event.target.name]:event.target.value})
      setSearchdata(event.target.value)
     }

          const getvalue = async () =>{
            try{
              if(searchdata.length === 10){
                const {data} = await GetOne(inputvalue)
                if(data.code === 'OK'){
                      setValue('firstname',data.result[0].firstname);
                      setValue('lastname', data.result[0].lastname);
                      // setMapsonce(data.result[0].tel)
                      setValue('address', data.result[0].address)
                  }
                }
                }catch (error) {
                  HandleAuth(error)
              }
          }
            // const mapsid =async () =>{
            //   const {data} = await Getmapsone({tel:mapsonce})
            //   if(data.code === 'OK'){
            //     console.log(data.results)
            //     setSelectmaps(data.results)
            //   }
            // }
            
     const Closemodal =()=>{ 
        clearError() 
        props.messErr()
        setVal()
     }
     const setVal = () => {
        // setValue('firstname', '')
        // setValue('lastname', '')
        // setValue('address', '')
        setValue('tel', '')
        setValue('amount', '')
        setValue('reservations_date','')
        props.CloseModal()
      }
      const setVal1 = () => {
        setValue('firstname', '')
        setValue('lastname', '')
        setValue('address', '')
        setValue('tel', '')
        setValue('amount', '')
        setValue('reservations_date','')
      }

      //create
  const onsubmit = handleSubmit(async value => {
      try {
      const { data } = await Createreservation(
        value.firstname,
        value.lastname,
        value.address,
        value.tel,
        value.amount,
        value.reservations_date,
      )
      if (data.code === 'OK') {
        setVal1()
        clearError()
        props.getResrvation()
        props.CloseModal()
      } else {
        props.messErr()
      }
  } catch (error) {
    HandleAuth(error)
  }
})
React.useEffect(() => {
  getvalue()
}, [searchdata])
    return(
        <div
              className={classnames('modal fade animated ', { 'show fadeInDown': props.modal })}
              style={{ display: props.modal ? 'block' : 'none', overflowY: 'auto' }}
            >
              <div className="modal-dialog modal-box-shadown" role="document">
                <div className="modal-content">
                  <Form onSubmit={onsubmit}>
                    <ModalHeader>เพิ่มการจองคิว</ModalHeader>
                    <div className="modal-body">
                        <div className="row">
                          <div className="col-md-12">
                              <label htmlFor="tel" className="mr-sm-2 ">
                              </label>
                              <input
                                type="text"
                                placeholder="กรุณาใส่เบอร์โทร"
                                className={classnames('Selectd form-control',{ 'is-invalid': !!errors.tel })}
                                name="tel"
                                id="tel"
                                ref={register}
                                onChange={handle}
                              />
                               <div className="invalid-feedback">{errors.tel && errors.tel.message}</div>
                            </div>
                          </div>
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
                                // value=""
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
                                disabled
                                // value=""
                                ref={register}
                              />
                              <div className="invalid-feedback">{errors.lastname && errors.lastname.message}</div>
                            </div>
                            <div className="col-md-12">
                              <label htmlFor="address" className="mr-sm-2 mt-2">
                                ที่อยู่
                              </label>
                              {/* <select ref={register} name="address" id="address" className={classnames('Selectd form-control',{ 'is-invalid': !!errors.address })}>
                                <option value=""></option>
                              </select> */}
                              <input 
                              type="text" 
                              className={classnames('Selectd form-control',{ 'is-invalid': !!errors.address })}
                              name="address" 
                              id="address"
                              ref={register}
                              // value=""
                              disabled
                              />
                              <div className="invalid-feedback">{errors.address && errors.address.message}</div>
                              {/* <input type="taxt" name="lat" id="lat" ref={register} />
                              <input type="taxt" name="lng" id="lng" ref={register} /> */}
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
                      </div>
                    <ModalFooter>
                      <Button type="submit" className="btn btn-primary">
                        ยืนยัน
                      </Button>
                      <Button type="button" className="btn btn-light" onClick={Closemodal} >
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