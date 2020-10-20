// import React, {useState} from 'react'
// import { Button, ModalHeader, ModalFooter, Form } from 'reactstrap'
// import classnames from 'classnames'
// import { useForm } from 'react-hook-form'

// import {CreateIncomeSchema} from '../../schema/income'
// import {HandleAuth} from '../../service/config'
// import {CreateIncome} from '../../service/income'

// const ModalFromincome = props => {
//     const { handleSubmit, register, errors, clearError, setValue } = useForm({
//         validationSchema: CreateIncomeSchema
//      })
//      const [sum1, setSum1] = useState('')
//      const [sum2, setSum2] = useState ('')
//      const [sumrepair, setSumrepair] = useState ('')
//      const [valuepromotion, setValuepromotin] = useState('')
   
//     //  imcome munny
//      let summ1 = Number(sum1) * 500
//      let summ2 = Number(sum2) * 600
//      let priserepair = Number(sumrepair)
//      let selectpromotion = Number(valuepromotion)
//      let sum3 = Number(summ1 + summ2 + priserepair - selectpromotion) 

//      const handlepromotion = (event) =>{
//       setValuepromotin(event.target.value)
//      }
//      const handlerepair = (event) =>{
//       setSumrepair(event.target.value)
//      }
    
//      const handle1 =  (event) => {
//       setSum2(event.target.value)
//      }
//      const handle =  (event) => {
//       setSum1(event.target.value)
//      }
//     //  set value
//     const setVal = () =>{
//       setValue('firstname', '')
//       setValue('lastname', '')
//       setValue('tel', '')
//       setValue('NinethousandBTU', '')
//       setValue('TwelvethousandBTU', '')
//       setValue('repair', '')
//       setValue('pricerepair', '')
//       setValue('promotion', '')
//       setValue('sum', '')
//       props.toggle()
//     }
    
//       //Close modal
//       const CloseModal = () =>{
//         clearError()
//         setVal()
//         props.messErr()
//       }
    
//   const onsubmits = handleSubmit(async value =>{
//     try {
//       const { data } = await CreateIncome(
//         value.firstname,
//         value.lastname,
//         value.tel,
//         value.NinethousandBTU,
//         value.TwelvethousandBTU,
//         value.repair,
//         value.pricerepair,
//         value.promotion,
//         value.sum,
//       )
//       if(data.code === 'OK'){
//         props.getIncomes()
//         setVal()
//       }else{
//         props.messErr()
//       }
//     } catch (error) {
//     HandleAuth(error)
//     }
//   })


// React.useEffect(() => {
// }, [])

//      return(
//         <div
//         className={classnames('modal fade animated', { 'show fadeInDown': props.modal })}
//         style={{ display: props.modal ? 'block' : 'none', overflowY: 'auto' }}
//       >
//         <div className="modal-dialog" role="document">
//           <div className="modal-content">
//             <Form onSubmit={onsubmits}>
//               <ModalHeader>คำนวนเงิน</ModalHeader>
//               <div className="modal-body">
//                 <div className="row">
//                   <div className="col-md-6 mt-2">
//                     <label htmlFor="firstname" className="mr-sm-2">
//                       ชื่อ
//                     </label>
//                     <input
//                       type="text"
//                       className={classnames('Selectd form-control',{ 'is-invalid': !!errors.firstname })}
//                       name="firstname"
//                       id="firstname"
//                       ref={register}
//                     />
//                   </div>
//                   <div className="col-md-6">
//                     <label htmlFor="lastname" className="mr-sm-2 mt-2">
//                       นามสกุล
//                     </label>
//                     <input
//                       type="text"
//                       className={classnames('Selectd form-control',{ 'is-invalid': !!errors.lastname })}
//                       name="lastname"
//                       id="lastname"
//                       ref={register}
//                     />
//                   </div>
//                   <div className="col-md-12">
//                     <label htmlFor="tel" className="mr-sm-2 mt-2">
//                       เบอร์โทร
//                     </label>
//                     <input
//                       type="text"
//                       className={classnames('Selectd form-control',{ 'is-invalid': !!errors.tel })}
//                       name="tel"
//                       id="tel"
//                       ref={register}
//                     />
//                   </div>
//                   <div className="col-md-6">
//                         <label htmlFor="NinethousandBTU" className="mr-sm-2 mt-2">
//                         900-15000 BTU
//                         </label>
//                             <input
//                             type="text"
//                             className={classnames('Selectd form-control',{ 'is-invalid': !!errors.NinethousandBTU })}
//                             name="NinethousandBTU"
//                             id="NinethousandBTU"
//                             onChange={handle}
//                             ref={register}
//                             />
//                         </div>
//                       <div className="col-md-6">
//                         <label htmlFor="TwelvethousandBTU" className="mr-sm-2 mt-2">
//                         18000-24000 BTU
//                         </label>
//                             <input
//                             type="text"
//                             className={classnames('Selectd form-control',{ 'is-invalid': !!errors.TwelvethousandBTU })}
//                             name="TwelvethousandBTU"
//                             id="TwelvethousandBTU"
//                             onChange={handle1}
//                             ref={register}
//                             />
//                         </div>
//                     <div className='col-md-12'>
//                     <label htmlFor="Repair" className="mr-sm-2 mt-2">
//                         รายละเอียดการซ่อม
//                       </label>
//                     <textarea 
//                     className={classnames('Selectd form-control',{ 'is-invalid': !!errors.repair })}
//                      name="repair"
//                      id="Repair" 
//                      rows="5" 
//                      cols="15"
//                      ref={register}
//                      />
//                     </div>
//                     <div className="col-md-12">
//                     <label htmlFor="pricerepair" className="mr-sm-2 mt-2">
//                       ราคาซ่อม
//                     </label>
//                     <input
//                       type="text"
//                       className={classnames('Selectd form-control',{ 'is-invalid': !!errors.pricerepair })}
//                       name="pricerepair"
//                       id="pricerepair"
//                       onChange={handlerepair}
//                       ref={register}
//                     />
//                   </div>
//                   <div className="col-md-12">
//                   <label htmlFor="Promotion" className="mr-sm-2 mt-2">
//                       โปรโมชั่น
//                     </label>
//                     <select              
//                     className={classnames('Selectd form-control',{ 'is-invalid': !!errors.promotion })}
//                     name="promotion" 
//                     id="promotion"
//                     onChange={handlepromotion} 
//                     ref={register}
//                     >
//                       <option value="0">-</option>
//                       {props.promotions.map((v, i)=>{
//                       return(
//                       <option value={v.discount} key={i + 'promotion'} >{v.promotion_name}</option>
//                       ) 
//                       })}
//                        </select>
//                   </div>
//                   <div className="col-md-12">
//                     <label htmlFor="sum" className="mr-sm-2 mt-2">
//                       ยอดชำระ
//                     </label>
//                     <input
//                       type="text"
//                       className={classnames('Selectd form-control',{ 'is-invalid': !!errors.sum })}
//                       name="sum"
//                       id="sum"
//                       value={sum3}
//                       ref={register}
//                     />
//                   </div>
//                   </div>
//                 </div>
//               <ModalFooter>
//                 <Button type="submit" className="btn btn-primary">
//                   ยืนยัน
//                 </Button>
//                 <Button type="button" className="btn btn-light" onClick={CloseModal}>
//                   ยกเลิก
//                 </Button>
//               </ModalFooter>
//             </Form>
//           </div>
//         </div>
//       </div>
//       )
//   }
//   export default ModalFromincome