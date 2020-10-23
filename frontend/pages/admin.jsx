import React, {useState} from 'react'

  //internal
import Homeplate from '../component/layouts/frontendlayouts'
import ModalfromNew from '../component/users/ModalfromNew'
import UpdateModal from '../component/users/UpdateModal'
import DeleteUsers from '../component/users/DeleteUser'
import { Getuser } from '../service/users'
import { HandleAuth } from '../service/config'
import Updatepass from '../component/users/updatepassword'

export default () => {
  const [modal, setModal] = useState(false)
  const [Users, setUsers] = useState([])
  const [modalupdate, setModalupdate] =useState(false)
  const [errorMsg, setErrorMsg] = React.useState(false)
  const [delId, setDelId] = useState('')
  const [delet, setDel] = useState(false)
  const [userId, setUserId] = useState('')
  const [inputvalue, setInputvalue] = useState({})
  const [modalpass, setModalpass] = useState(false)
  const [passid, setPassid] = useState("")

  // update password
  const updatepass = () =>{
    setModalpass(!modalpass)
  }
  const Closeupdatepass = () =>{
    setModalpass(false)
  }
  const clickupdatepass = (id) =>{
    setPassid(id)
    updatepass()
  }

  const textstatus = {
    ใช้งาน:<p className="text-success"><i className="fas fa-circle" style={{fontSize:'1px'}}></i> ใช้งาน</p>,
    ไม่ใช้งาน:<p className="text-danger"><i className="fas fa-circle" style={{fontSize:'1px'}}></i> ไม่ใช้งาน</p>
  }

  //modal update 
  const Modalupdate = () =>{
    setModalupdate(!modalupdate)
  }
  const Closeupdate = () => {
    setUserId('')
    setModalupdate(false)
  }

    // Set Id
    const select = (id) => {
      setUserId(id)
      Modalupdate()
    }

  // modal new
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
  
  // delete
 const CloseDelete = () => setDel(false)
  const deluser = () => {
    setDel(true)
  }
  const deleteuser = (id) => {
    setDelId(id)
    deluser()
  }

  // get user
  const GetData = async () =>{
    try{
      const {data} = await Getuser(inputvalue)
      if(data.code === 'OK'){
        setUsers(data.results)
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
    GetData()
  }, [])
  return (
    <Homeplate>
      <ModalfromNew modal={modal} GetUser={GetData} messErr={messErr} errorMsg={errorMsg} CloseModal={CloseModal}/>
      <UpdateModal modalupdate={modalupdate} Closeupdate={Closeupdate} userId={userId} GetUser={GetData} errorMsg={errorMsg} messErr={messErr}/>
      <DeleteUsers  CloseDelete={CloseDelete} delId={delId} delet={delet} GetUser={GetData}  errorMsg={errorMsg}/>
        <Updatepass GetUser={GetData} messErr={messErr} errorMsg={errorMsg} modalpass={modalpass} passid={passid} Closeupdatepass={Closeupdatepass} />
          <div className="card cards">
            <div className="card-header span-a ">
                        <p className="text-title" >ข้อมูลพนักงาน</p>
                    </div>
            <div className="cars-body">
              <div className="row head-reservation">
                  <button className="btn btn-light" onClick={toggle}>
                      <i className="fas fa-plus-circle"></i> เพิ่ม
                  </button>
                  </div>
              <div className="row head-search">
                <div className="col-md-2">
                  <label className="mb-0 ">ค้นหา</label>
                  <input type="text" className="Selectd form-control" placeholder="กรุณากรอกอีเมลพื่อค้นหา" name="email" onChange={handle} />
                </div>
                  <div className="col-md-2">
                    <button className="btn btn-light mb-0 mt-4" onClick={GetData} >
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
                              <th>อีเมล</th>
                              <th>ที่อยู่</th>
                              <th>เบอร์โทรศัพท์</th>
                              <th>สิทธิการใช้งาน</th>
                              <th>สถานะ</th>
                            <th></th>
                          </tr>
                        </thead>
                        <tbody>
                          {Users.map((v, i)=>{
                            return(
                            <tr key={i + 'userdata'}>
                            <td className="text-center">{i + 1}</td>
                            <td>{v.firstname}</td>
                            <td>{v.lastname}</td>
                            <td>{v.email}</td>
                            <td>{v.address}</td>
                            <td>{v.tel}</td>
                            <td>{v.userrights}</td>
                            <td>{textstatus[v.status]}</td>
                            <td className="text-center">
                            <button className="btn" onClick={select.bind(this, v._id)} data-toggle="tooltip" data-placement="left" title="แก้ไข">
                              <i className="far fa-edit" ></i>
                            </button>
                            <button className="btn" onClick={clickupdatepass.bind(this, v._id)} data-toggle="tooltip" data-placement="left" title="แก้ไขรหัสผ่าน">
                              <i class="fas fa-unlock-alt"></i>
                            </button>
                           {/* <button className="btn " style={{ color: 'red' }} onClick={deleteuser.bind(this, v._id)} data-toggle="tooltip" data-placement="left" title="ลบพนักงาน">
                              <i className="fas fa-trash-alt"></i>
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
          </div>
    </Homeplate>
  )
}
