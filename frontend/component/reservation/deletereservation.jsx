// import React from 'react'
// import { Button, ModalHeader, ModalFooter, FormGroup } from 'reactstrap'
// import classnames from 'classnames'

// // internal
// import {HandleAuth} from '../../service/config'
// import {DeleteQue} from '../../service/reservation'

// const Deleteque = props =>{

//     const deldata = async () =>{
//         try{
//             if(props.delId){
//                 const {data} = await DeleteQue(props.delId)
//                 if(data.code === 'OK'){
//                    props.getResrvation()
//                    props.CloseDelete()
//                 }
//             }
//         }catch(error){
//             HandleAuth(error)
//         }
//     }
//     return(
//         <div
//         className={classnames('modal fade animated', { 'show fadeInDown': props.delet })}
//         style={{ display: props.delet ? 'block' : 'none' }}
//       >
//         <div className="modal-dialog">
//           <div className="modal-content">
//             <ModalHeader>ลบการจองคิว</ModalHeader>
//             <div className="modal-body">
//               <FormGroup>
//                 <p style={{ textAlign: 'center', fontSize: '18px'}}>
//                   <i className="far fa-trash-alt"></i> คุณแน่ใจหรือไม่ ?
//                 </p>
//               </FormGroup>
//               <ModalFooter>
//                 <Button className="btn btn-danger " onClick={deldata}>
//                   ใช่
//                 </Button>
//                 <Button onClick={props.CloseDelete}>ไม่</Button>
//               </ModalFooter>
//             </div>
//           </div>
//         </div>
//       </div>
//     )
// }
// export default Deleteque