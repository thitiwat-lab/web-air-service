import React, {useState} from 'react'

//internal
import PortalTemplate from '../../../component/layouts/template'
// import ModalFromincome from '../../../component/income/createincome'
import {GetIncome} from '../../../service/income'
import { HandleAuth } from '../../../service/config'
import {GetPromotion} from '../../../service/promotion'
import UpdateModal from '../../../component/income/updateincome'
import UpdateStatus from '../../../component/income/updatestatus'
import Detail from '../../../component/income/getincome'
import DetailIcome from '../../../component/listdetail/detailicom'

export default () => {
  const [modal, setModal] = useState(false)
  const [errorMsg, setErrorMsg] = React.useState(false)
  const [income, setIncome] = useState([])
  const [promotions, setPromotions] = useState([])
  const [inputvalue, setInputvalue] = useState({})
  const [modalupdate, setModalupdate] = useState(false)
  const [updateId, setUpdateId] = useState('')
  const [updatestatus, setUpdatestatus]= useState(false)
  const [statusId, setStatusId]= useState('')
  const [modaldetail, setModaldetail] =useState(false)
  const [detailId, setDetailId] =useState('')
  const [detailuser, setDetailuser] = useState(false)
  const [detailid, setDetailid] = useState('')
   // detail
   const detail =()=>{
    setDetailuser(!detailuser)
  }
  const CloseDetails =()=>{
    setDetailuser(false)
  }
  const dtId =(id)=>{
    setDetailid(id)
    detail()
  }
   // text color
   const textstatus = {
    อยู่ระหว่างดำเนินการ:<p className="text-warning">อยู่ระหว่างดำเนินการ</p>,
    จ่ายแล้ว:<p className="text-success">จ่ายแล้ว</p>
  }
   const icons ={
    อยู่ระหว่างดำเนินการ: <i className="fas fa-dollar-sign text-warning"></i>,
    จ่ายแล้ว: <i className="fas fa-check-circle text-success"></i>,
   }

  // detail
  const Details = () =>{
    setModaldetail(!modaldetail)
  }
  const CloseDetail = () =>{
    setModaldetail(false)
  }
  const selectdetal =(id)=>{
    setDetailId(id)
    Details()
  }

  // update status
  const ModalStatus = () =>{
    setUpdatestatus(!updatestatus)
  }
  const CloseModalStatus = () =>{
    setUpdatestatus(false)
  }
  const selectstatus = (id) =>{
    setStatusId(id)
    ModalStatus()
  }

  // update income
  const Modalupdate = () =>{
    setModalupdate(!modalupdate)
  }
  const Closeupdate = () => {
    setModalupdate(false)
  }
  const selects = (id) => {
    setUpdateId(id)
    Modalupdate()
  }
  
  // create inmome
  const toggle = () => {
    getIncomes()
    setModal(!modal)
    setErrorMsg(false)
  }
  const CloseModal = () => {
    setModal(false)
  }
  const messErr = () => {
    setErrorMsg(true)
  }
  
  // get data income
  const getIncomes = async () =>{
    try{
      const {data} = await GetIncome(inputvalue)
      if(data.code === 'OK'){
        setIncome(data.results)
      }
    }catch(error){
      HandleAuth(error)
    }
  }

  const handle = (event) => {
    setInputvalue({ ...inputvalue, [event.target.name]: event.target.value })
  }

   // get promotion
   const getpromotion = async () =>{
    try{
      const {data} = await GetPromotion()
      if(data.code === 'OK'){
        setPromotions(data.results)
      }
    }catch(error){
      HandleAuth(error)
    }
  }
  React.useEffect(() => {
    getIncomes()
    getpromotion()
  }, [])
 
    return(
        <PortalTemplate>
          {/* <ModalFromincome toggle={toggle} promotions={promotions} getIncomes={getIncomes} CloseModal={CloseModal} messErr={messErr} errorMsg={errorMsg} modal={modal} /> */}
          <UpdateModal Closeupdate={Closeupdate} modalupdate={modalupdate} promotions={promotions} getIncomes={getIncomes} updateId={updateId}  messErr={messErr} errorMsg={errorMsg} />
          <UpdateStatus updatestatus={updatestatus}CloseModalStatus={CloseModalStatus} statusId={statusId} getIncomes={getIncomes} messErr={messErr} errorMsg={errorMsg} />
         <Detail modaldetail={modaldetail} detailId={detailId} CloseDetail={CloseDetail} messErr={messErr} errorMsg={errorMsg}/>
         <DetailIcome detailuser={detailuser} detailid={detailid} CloseDetails={CloseDetails} />
         <div>
         <div className="card cards">
                  <div className="card-header span-a ">
                        <p className="text-title" >ประมวลผลค่าใช้จ่าย</p>
                    </div>
            <div className="cars-body">
              {/* <div className="row mt-5 ml-4">
                  <button className="btn btn-light" onClick={toggle} >
                      <i className="fas fa-plus-circle"></i> เพิ่ม
                  </button>
                  </div> */}
              <div className="row head-search">
                <div className="col-md-2">
                  <label className="mb-0 ">ค้นหา</label>
                  <input type="text" className="Selectd form-control" placeholder="กรุณากรอกชื่อเพื่อค้นหา" name="firstname" onChange={handle}/>
                </div>
                  <div className="col-md-2">
                    <button className="btn btn-light mb-0 mt-4" onClick={getIncomes} >
                      <i className="fas fa-search"></i> ค้นหา
                    </button>
                  </div>
              </div>
                  <div className="col">
                    <div className="col-md-12 table-responsive">
                        <table className="table table-ml table-bordered table-striped table-hover mt-3">
                          <thead>
                            <tr>
                              <th className="text-center">#</th>
                              <th>ชื่อ</th>
                              <th>นามสกุล</th>
                              <th>เบอร์โทรศัพท์</th>
                              {/* <th>9000-15000BTU</th>
                              <th>18000-24000BTU</th>
                               <th>รายละเอียกการซ่อม</th> */}
                              {/* <th>ราคาซ่อม</th>
                              <th>ส่วนลด</th>
                              <th>ยอดชำระ</th>  */}
                              <th>สถานะการเงิน</th>
                              <th></th>
                          </tr>
                        </thead>
                        <tbody>
                          {income.map((v, i)=>{
                            return(
                            <tr key={i + 'income'}>
                            <td className="text-center">{i+1}</td>
                            <td><p onClick={dtId.bind(this, v._id)} className="text-detail-all text-detail-all1">{v.firstname}</p></td>
                            <td>{v.lastname}</td>
                            <td>{v.tel}</td>
                            {/* <td>{v.NinethousandBTU}</td>
                            <td>{v.TwelvethousandBTU}</td>
                            <td>{v.pricerepair}</td> */}
                            {/* <td>{v.pricerepair}</td> */}
                            {/* <td>{v.promotion}</td>
                            <td>{v.sum}</td> */}
                            <td>
                              {textstatus[v.status]}
                              </td>
                            <td className="text-center">
                              {/* <button className="btn" onClick={selects.bind(this, v._id)}  data-toggle="tooltip" data-placement="left" title="แก้ไข">
                                <i className="far fa-edit" ></i>
                              </button> */}
                              <button  
                                className="btn"  
                                style={{color:'green'}} 
                                onClick={selectstatus.bind(this, v._id)}  
                                data-toggle="tooltip" 
                                data-placement="left" 
                                title="ยืนยันการชำระเงิน" 
                                disabled={v.status === 'จ่ายแล้ว' ? true : false}
                              >
                                {icons[v.status]}
                              </button>
                              <button className="btn" 
                              onClick={selectdetal.bind(this, v._id)} 
                              data-toggle="tooltip" 
                              data-placement="left" 
                              title="พิมพ์ใบเสร็จ"
                              >
                                <i className="fas fa-print"/>
                              </button>
                            </td>
                            </tr>
                            )
                          })}
                        </tbody>
                      </table>
                </div>
              </div>
            </div>
          </div>
        </div>
    </PortalTemplate>
    )
}