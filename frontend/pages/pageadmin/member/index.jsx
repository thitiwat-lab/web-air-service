import React, {useState} from 'react'

//internal
import Adminplate from '../../../component/layouts/frontendlayouts'
import{GetMember} from '../../../service/member'
import {HandleAuth} from '../../../service/config'
import ModalFrom from '../../../component/member/modalnew'
import Updatemodalmember from '../../../component/member/updatemember'
import Deletedmember from '../../../component/member/deletemember'
export default () =>{

  const [members, setMembers] = useState([])
  const [inputvalue, setInputvalue] = useState({})
  const [modal1, setModal1] = useState(false)
  const [errorMsg, setErrorMsg] = React.useState(false)
  const [updatemodal, setUpdatemdal] = useState(false)
  const [updateId, setUpdateId] = useState('')
  const [delet, setDel] = useState(false)
  const [delId, setDelId] = useState('')

  // delete
  const CloseDelete = () => setDel(false)
  const delque = () => {
    setDel(true)
  }
  const delmember = (id) => {
    setDelId(id)
    delque()
  }

 //modal update 
  const Modalupdate = () =>{
    setUpdatemdal(!updatemodal)
  }
  const Closeupdate = () => {
    setUpdatemdal(false)
  }
    // Set Id
    const selects = (id) => {
      setUpdateId(id)
      Modalupdate()
    }


  // modal new
  const toggle = () =>{
    setModal1(!modal1)
    setErrorMsg(false)
  }
  const CloseModal1 = () =>{
    setModal1(false)
  }
  const messErr = () =>{
    setErrorMsg(true)
  }

  const getmember = async () => {
    try{
      const {data} = await GetMember(inputvalue)
      if(data.code === 'OK'){
        setMembers(data.results)
      }

    }catch(error){
      HandleAuth(error)
    }
  }
// search
const handle = (event) => {
  setInputvalue({ ...inputvalue, [event.target.name]: event.target.value })
}
  React.useEffect(() => {
    getmember()
  }, [])

    return(
        <Adminplate>
          <ModalFrom modal1={modal1} getmember={getmember} CloseModal1={CloseModal1} messErr={messErr} errorMsg={errorMsg} />
          <Updatemodalmember getmember={getmember} Closeupdate={Closeupdate} updateId={updateId} updatemodal={updatemodal}  messErr={messErr} errorMsg={errorMsg} />
          <Deletedmember getmember={getmember} CloseDelete={CloseDelete} delet={delet} delId={delId} messErr={messErr} errorMsg={errorMsg}  />
          <div className="card cards">
          <div className="card-header span-a ">
                        <p className="text-title" >ข้อมูลลูกค้า</p>
                    </div>
            <div className="cars-body">
              <div className="row head-reservation">
                  <button className="btn btn-light" onClick={toggle} >
                      <i className="fas fa-plus-circle"></i> เพิ่ม
                  </button>
                  </div>
              <div className="row head-search">
                <div className="col-md-2">
                  <label className="mb-0 ">ค้นหา</label>
                  <input type="text" className="Selectd form-control" placeholder="กรุณากรอกชื่อเพื่อค้นหา" name="firstname" onChange={handle}/>
                </div>
                <div className="col-md-2 mt-4">
                  <input type="text" className="Selectd form-control" placeholder="กรุณากรอกเบอร์โทรเพื่อค้นหา" name="tel" onChange={handle} />
                </div>
                  <div className="col-md-2">
                    <button className="btn btn-light mb-0 mt-4" onClick={getmember} >
                      <i className="fas fa-search"></i> ค้นหา
                    </button>
                  </div>
              </div>
              <div className="col-md-12 table-responsive">
                        <table className="table table-ml table-bordered table-striped table-hover mt-3">
                          <thead>
                            <tr>
                              <th className="text-center">#</th>
                              <th>ชื่อ</th>
                              <th>นามสกุล</th>
                              <th>ที่อยู่</th>
                              <th>เบอร์โทรศัพท์</th>
                            <th></th>
                          </tr>
                        </thead>
                        <tbody>
                          {members.map((v, i)=>{
                            return(
                            <tr key = {i + 'member'}>
                            <td className="text-center">{i + 1}</td>
                            <td>{v.firstname}</td>
                            <td>{v.lastname}</td>
                            <td>{v.address}</td>
                            <td>{v.tel}</td>
                            <td className="text-center">
                            <button className="btn" onClick={selects.bind(this, v._id)} data-toggle="tooltip" data-placement="left" title="แก้ไข" >
                              <i className="far fa-edit" ></i>
                            </button>
                           {/* <button className="btn " style={{ color: 'red' }} onClick={delmember.bind(this, v._id)} data-toggle="tooltip" data-placement="left" title="ลบสมาชิก" >
                              <i className="fas fa-trash-alt"></i>
                            </button> */}
                            {/* <button className="btn" style={{color:'green'}}>
                              <i class="fas fa-map-marked-alt"></i>
                              </button> */}
                          </td>
                          </tr>
                          )
                          })}
                        </tbody>
                      </table>
                </div>
              </div>
            </div>
        </Adminplate>
    )
}