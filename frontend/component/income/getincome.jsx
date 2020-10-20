import React, {useState, useRef} from 'react'
import { Button, ModalHeader, ModalFooter, Form } from 'reactstrap'
import classnames from 'classnames'
import Link from 'next/link'
import ReactToPrint, {useReactToPrint } from 'react-to-print';
// internal
import {HandleAuth} from '../../service/config'
import {GetIdincome} from '../../service/income'

const Detail = props => {
    const[getdetail, setGetdetail]=useState([])

    // class ComponentToPrint extends React.Component {
    //     render() {
    //       return (
    //         <table>
    //           <thead>
    //             <th>column 1</th>
    //             <th>column 2</th>
    //             <th>column 3</th>
    //           </thead>
    //           <tbody>
    //             <tr>
    //               <td>data 1</td>
    //               <td>data 2</td>
    //               <td>data 3</td>
    //             </tr>
    //           </tbody>
    //         </table>
    //       );
    //     }
    //   }
 const fetchById = async () => {
        try{
            if(props.detailId){
                const {data} = await GetIdincome(props.detailId)
                if(data.code === 'OK'){
                    setGetdetail(data.results)
                }
            }
        }catch (error) {
          HandleAuth(error)
        }
    }
    const componentRef = useRef();
    const handlePrint = useReactToPrint({
      content: () => componentRef.current,
    })
    React.useEffect(() =>{
        fetchById()
    },[props.detailId])
    return(
        <div
         className={classnames('modal fade animated', { 'show fadeInDown': props.modaldetail })}
         style={{ display: props.modaldetail ? 'block' : 'none', overflowY: 'auto' }}
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
              <div ref={componentRef}>
              <ModalHeader>
                  <div className="row">
                        <p>ใบเสร็จรับเงิน</p>
                          <p style={{marginLeft:'180px'}}>เลขที่..............</p>
                  </div>
                  </ModalHeader>
            <div className="modal-body">
                <div className="row">
                    <div className="col-md-4 ml-1">
                        <p>ชื่อ : {getdetail.firstname} </p>
                        </div>
                    <div className="col-md-4 ml-1">
                        <p>นามสกุล : {getdetail.lastname} </p>
                        </div>
                    <div className="col-md-12 ml-1">
                        <p>เบอร์โทรศัพท์ : {getdetail.tel} </p>
                        </div>
                    <div className="col-md-12">
                        <div className="col-md-12 border border-dark">
                            <div className="mt-2 mb-1">
                                <p>9000-15,000 BTU จำนวน {getdetail.NinethousandBTU} เครื่อง</p>
                                <p>18,000-24,000 BTU จำนวน {getdetail.TwelvethousandBTU} เครื่อง</p>
                                <p>รายละเอียด : {getdetail.repair} </p>
                                <p>ราคาซ่อม : {getdetail.pricerepair} </p>
                                <p>ส่วนลด : {getdetail.promotion} </p>
                                <p>ยอดชำระ : {getdetail.sum} </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
            <ModalFooter>
                <Button type="submit" className="btn btn-primary" onClick={handlePrint}>
                        พิมพ์
                </Button>
                <Button type="button" className="btn btn-light" onClick={props.CloseDetail} >
                    ยกเลิก
                </Button>
                </ModalFooter>
          </div>
        </div>
    </div>
    )

    }

export default Detail