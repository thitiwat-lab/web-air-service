import React, {useState} from 'react'

//internal
import PortalTemplate from '../../component/layouts/template'
import ModalfromNew from '../../component/users/ModalfromNew'
import {Getuser} from '../../service/users'
import { HandleAuth } from '../../service/config'

export default () => {
  const [modal, setModal] = useState(false)
  const [Users, setUsers] = useState([])
  const [errorMsg, setErrorMsg] = React.useState(false)
  const [inputvalue, setInputvalue] = useState({})

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
  
  // get user
  const GetUser = async () =>{
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
    GetUser()
  }, [])
  return (
    <PortalTemplate>
      <ModalfromNew modal={modal} GetUser={GetUser} messErr={messErr} errorMsg={errorMsg} CloseModal={CloseModal}/>
            <div className="cars-body">
              <div className="row mt-5 ml-4">
                  <button className="btn btn-light" onClick={toggle}>
                      <i className="fas fa-plus-circle"></i> เพิ่ม
                  </button>
                  </div>
              <div className="row ml-2 mt-4">
                <div className="col-md-2">
                  <label className="mb-0 ">ค้นหา</label>
                  <input type="text" className="Selectd form-control" placeholder="กรุณากรอกอีเมลเพื่อค้นหา" name="email" onChange={handle} />
                </div>
                  <div className="col-md-2">
                    <button className="btn btn-light mb-0 mt-4" onClick={GetUser} >
                      <i className="fas fa-search"></i> ค้นหา
                    </button>
                  </div>
              </div>
              <div className="container-fluid table-responsive">
                        <table className="table table-xl table-bordered table-striped table-hover mt-3">
                          <thead>
                            <tr>
                              <th className="text-center">#</th>
                              <th>ชื่อ</th>
                              <th>นามสกุล</th>
                              <th>อีเมล</th>
                              <th>ที่อยู่</th>
                              <th>เบอร์โทรศัพท์</th>
                              <th>สถานะ</th>
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
                            <td>{v.status}</td>
                          </tr>
                            )
                          })}
                        </tbody>
                      </table>
                </div>
              </div>
    </PortalTemplate>
    )
}