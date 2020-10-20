import React, {useState} from 'react'

//internal
import PortalTemplate from '../../../component/layouts/template'
import { HandleAuth } from '../../../service/config'
import {GetPromotion} from '../../../service/promotion'
import ModalFrom from '../../../component/promotion/createmodel'
import Promotiondelete from '../../../component/promotion/deletemodel'
import UpdateModal from '../../../component/promotion/updatemodel'

export default () => {
 
  const [Promotion, setPromotion] = useState([])
  const [modal, setModal] = useState(false)
  const [errorMsg, setErrorMsg] = React.useState(false)
  const [delet, setDel] = useState(false)
  const [delId, setDelId] = useState('')
  const [promotionId, setPromotionId] = useState('')
  const [modalupdate, setModalupdate] =useState(false)
  const [inputvalue, setInputvalue] = useState({})


  // update promotion
  const Modalupdate = () =>{
    setModalupdate(!modalupdate)
  }
  const Closeupdate = () =>{
    setPromotionId('')
    setModalupdate(false)
  }
  const selest = (id) =>{
    setPromotionId(id)
    Modalupdate()
  }

  // Delete Promotion
  const CloseDelete = () => setDel(false)
  const delpromotion = () => {
    setDel(true)
  }

  const Iddel = (id) =>{
    setDelId(id)
    delpromotion()
  }

  // new promotion
  const toggle = () => {
    setModal(!modal)
    setErrorMsg(false)
  }
  const CloseModal = () => {
    setModal(false)
  }
  const messErr = () => {
    setErrorMsg(true)
  }

  // search
  const handle = (event) => {
    setInputvalue({ ...inputvalue, [event.target.name]: event.target.value })
  }
  // get Promotion
  const getPromotion = async () =>{
    try{
      const {data} = await GetPromotion(inputvalue)
      if(data.code === 'OK'){
        setPromotion(data.results)
      }
    }catch(error){
      HandleAuth(error)
    }
  }

  React.useEffect(() => {
    getPromotion()
  }, [])
    return(
        <PortalTemplate>
          <ModalFrom modal={modal} getPromotion={getPromotion} messErr={messErr} errorMsg={errorMsg} CloseModal={CloseModal} />
         <Promotiondelete getPromotion={getPromotion} CloseDelete={CloseDelete} delet={delet} delId={delId} messErr={messErr} errorMsg={errorMsg} />
         <UpdateModal Closeupdate={Closeupdate} modalupdate={modalupdate} promotionId={promotionId} getPromotion={getPromotion} messErr={messErr} errorMsg={errorMsg} />
         <div>
         <div className="card cards">
              <div className="card-header span-a ">
                        <p className="text-title" >โปรโมชั่น</p>
                    </div>
            <div className="cars-body">
              <div className="row mt-3 ml-4">
                  <button className="btn btn-light" onClick={toggle} >
                      <i className="fas fa-plus-circle"></i> เพิ่ม
                  </button>
                  </div>
              <div className="row ml-3 mt-2">
                <div className="col-md-2">
                  <label className="mb-0 ">ค้นหา</label>
                  <input type="text" className="Selectd form-control" placeholder="กรุณากรอกชื่อโปรโมชั่นเพื่อค้นหา" name="promotion_name" onChange={handle} />
                </div>
                  <div className="col-md-2">
                    <button className="btn btn-light mb-0 mt-4" onClick={getPromotion}>
                      <i className="fas fa-search"></i> ค้นหา
                    </button>
                  </div>
              </div>
                  <div className="col">
                    <div className="col-md-12 table-responsive">
                        <table className="table table-ml table-bordered table-striped table-hover mt-3">
                          <thead>
                            <tr>
                              <th>ระยะเวลาโปรโมชั่น</th>
                              <th>ชื่อโปรโมชั่น</th>
                              <th>รายละเอียด</th>
                              <th>ส่วนลด</th>
                              <th></th>
                          </tr>
                        </thead>
                        <tbody>
                          {Promotion.map((v, i)=>{
                            return(
                            <tr key={i + 'promotion'}>
                            <td >{v.start_date.slice(8,-14)}-{v.start_date.slice(5,-17)}-{v.start_date.slice(0,-20)} &nbsp;-&nbsp; {v.end_date.slice(8,-14)}-{v.end_date.slice(5,-17)}-{v.end_date.slice(0,-20)} </td>
                            <td>{v.promotion_name}</td>
                            <td>{v.description}</td>
                            <td>{v.discount}</td>
                            <td className="text-center">
                              <button className="btn" onClick={selest.bind(this, v._id)}  data-toggle="tooltip" data-placement="left" title="แก้ไข" >
                                <i className="far fa-edit" ></i>
                              </button>
                              <button className="btn " style={{ color: 'red' }} onClick={Iddel.bind(this, v._id)}  data-toggle="tooltip" data-placement="left" title="ลบโปรโมชั่น" >
                                <i className="fas fa-trash-alt"></i>
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