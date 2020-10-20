import React, {useState} from 'react'
import { Button, ModalHeader, ModalFooter, Form } from 'reactstrap'
import classnames from 'classnames'
import { useForm } from 'react-hook-form'

// internal
import {HandleAuth} from '../../service/config'
import {UpdateIncome} from '../../service/income'
import {UpdateIncomeSchema} from '../../schema/income'
import {GetIdincome} from '../../service/income'

const UpdateModal = props => {
    const { handleSubmit, register, errors, clearError, setValue } = useForm({
         validationSchema: UpdateIncomeSchema})

         const [sum1, setSum1] = useState('')
         const [sum2, setSum2] = useState ('')
         const [sumrepair, setSumrepair] = useState ('')
         const [valuepromotion, setValuepromotin] = useState('')
        
         //  get Id Income
         const fetchById = async () => {
            try {
              if (props.updateId) {
                const { data } = await GetIdincome(props.updateId)
                if (data.code === 'OK') {
                    setValue('firstname', data.results.firstname)
                    setValue('lastname', data.results.lastname)
                    setValue('tel', data.results.tel)
                    setValue('NinethousandBTU', data.results.NinethousandBTU)
                    setValue('TwelvethousandBTU', data.results.TwelvethousandBTU)
                    setValue('repair', data.results.repair)
                    setValue('pricerepair', data.results.pricerepair)
                    setValue('promotion', data.results.promotion)
                    setValue('sum', data.results.sum)
                    clearError()
                } else {
                  props.messErr()
                }
              }
            } catch (error) {
              HandleAuth(error)
            }
          }

        //  imcome munny
         let summ1 = Number(sum1) * 500
         let summ2 = Number(sum2) * 600
         let priserepair = Number(sumrepair)
         let selectpromotion = Number(valuepromotion)
         let sum3 = Number(summ1 + summ2 + priserepair - selectpromotion) 
    
         const handlepromotion = (event) =>{
          setValuepromotin(event.target.value)
         }
         const handlerepair = (event) =>{
          setSumrepair(event.target.value)
         }
        
         const handle1 =  (event) => {
          setSum2(event.target.value)
         }
         const handle =  (event) => {
          setSum1(event.target.value)
         }

         const Closeupdate = () =>{
            setValue('firstname', '')
            setValue('lastname', '')
            setValue('tel', '')
            setValue('NinethousandBTU', '')
            setValue('TwelvethousandBTU', '')
            setValue('repair', '')
            setValue('pricerepair', '')
            setValue('promotion', '')
            setValue('sum', '')
            clearError()
            props.Closeupdate()
         }
    const onSubmit = handleSubmit(async (value) =>{
        if(props.updateId){
            try{
                const { data } = await UpdateIncome(props.updateId, value)
            if(data.code === 'OK'){
                props.getIncomes()
                props.Closeupdate()    
            } 
            }catch (error) {
            HandleAuth(error)
          }
        }
    })

    React.useEffect(() => {
        fetchById()
    }, [props.updateId])
    return(
        <div
        className={classnames('modal fade animated', { 'show fadeInDown': props.modalupdate })}
        style={{ display: props.modalupdate ? 'block' : 'none', overflowY: 'auto' }}
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <Form onSubmit={onSubmit} >
              <ModalHeader>แก้ไขประมวลผลค่าใช้จ่าย</ModalHeader>
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
                  </div>
                  <div className="col-md-12">
                    <label htmlFor="tel" className="mr-sm-2 mt-2">
                      เบอร์โทร
                    </label>
                    <input
                      type="tel"
                      className={classnames('Selectd form-control',{ 'is-invalid': !!errors.tel })}
                      name="tel"
                      id="tel"
                      ref={register}
                      disabled
                    />
                  </div>
                  <div className="col-md-6">
                        <label htmlFor="NinethousandBTU" className="mr-sm-2 mt-2">
                        900-15000 BTU
                        </label>
                            <input
                            type="text"
                            className={classnames('Selectd form-control',{ 'is-invalid': !!errors.NinethousandBTU })}
                            name="NinethousandBTU"
                            id="NinethousandBTU"
                            onChange={handle}
                            ref={register}
                            />
                        </div>
                      <div className="col-md-6">
                        <label htmlFor="TwelvethousandBTU" className="mr-sm-2 mt-2">
                        18000-24000 BTU
                        </label>
                            <input
                            type="text"
                            className={classnames('Selectd form-control',{ 'is-invalid': !!errors.TwelvethousandBTU })}
                            name="TwelvethousandBTU"
                            id="TwelvethousandBTU"
                            onChange={handle1}
                            ref={register}
                            />
                        </div>
                    <div className='col-md-12'>
                    <label htmlFor="Repair" className="mr-sm-2 mt-2">
                        รายละเอียดการซ่อม
                      </label>
                    <textarea 
                    className={classnames('Selectd form-control',{ 'is-invalid': !!errors.repair })}
                     name="repair"
                     id="Repair" 
                     rows="5" 
                     cols="15"
                     ref={register}
                     />
                    </div>
                    <div className="col-md-12">
                    <label htmlFor="pricerepair" className="mr-sm-2 mt-2">
                      ราคาซ่อม
                    </label>
                    <input
                      type="text"
                      className={classnames('Selectd form-control',{ 'is-invalid': !!errors.pricerepair })}
                      name="pricerepair"
                      id="pricerepair"
                      onChange={handlerepair}
                      ref={register}
                    />
                  </div>
                  <div className="col-md-12">
                  <label htmlFor="Promotion" className="mr-sm-2 mt-2">
                      โปรโมชั่น
                    </label>
                    <select              
                    className={classnames('Selectd form-control',{ 'is-invalid': !!errors.promotion })}
                    name="promotion" 
                    id="promotion"
                    onChange={handlepromotion} 
                    ref={register}
                    >
                      <option value="0">-</option>
                      {props.promotions.map((v, i)=>{
                      return(
                      <option value={v.discount} key={i + 'promotion'} >{v.promotion_name}</option>
                      ) 
                      })}
                       </select>
                  </div>
                  <div className="col-md-12">
                    <label htmlFor="sum" className="mr-sm-2 mt-2">
                      ยอดชำระ
                    </label>
                    <input
                      type="text"
                      className={classnames('Selectd form-control',{ 'is-invalid': !!errors.sum })}
                      name="sum"
                      id="sum"
                      value={sum3}
                      ref={register}
                    />
                  </div>
                  </div>
                </div>
              <ModalFooter>
                <Button type="submit" className="btn btn-primary">
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