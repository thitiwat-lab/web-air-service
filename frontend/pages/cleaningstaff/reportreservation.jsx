import React, {useState, useEffect} from 'react'

// internal
import PortalTemplate from '../../component/layouts/cleaningstaff'
import {HandleAuth} from '../../service/config'
// import ModalFrom from '../../component/reservation/modelreservation'
import {GetResrvation} from '../../service/reservation'
import UpdateModal from '../../component/reservation/updatereservation'
// import Maps from '../../component/reservation/createmaps'
import Showmaps from '../../component/cleaningstaff/showmaps'
// import ModalFromnew from '../../component/member/modalnew'
import {GetMember} from '../../service/member'
// import ModelMap from '../../component/reservation/createmaps'
import {GetMaps} from '../../service/maps'

export default () => {
  // const [modal, setModal] = useState(false)
  const [errorMsg, setErrorMsg] = React.useState(false)
  const [reservation, setReservation] =useState([])
  const [modalupdate, setModalupdate] = useState(false)
  const [updateId, setUpdateId] = useState('')
  // const [inputvalue, setInputvalue] = useState({})
  // const [updatemaps, setUpdatemaps] = useState(false)
  // const [mapsid, setMapsid] =useState('')
  const [mapid, setMapId] =useState('')
  const [shomaps, setShomaps] = useState(false)
  // const [modal1, setModal1] = useState(false)
  // const [members, setMembers] = useState([])
  // const [modalmap1, setModalmap1] = useState(false)
  const [mapsdata, setMapsdata] = useState([])
  const [search, setSearch] = useState("");
  const [filteredCountries, setFilteredCountries] = useState([]);

  // text color
  const textstatus = {
    อยู่ระหว่างดำเนินการ:<p className="text-warning">อยู่ระหว่างดำเนินการ</p>,
    ล้างแล้ว:<p className="text-success">ล้างแล้ว</p>,
    ยกเลิกการจองคิว:<p className="text-danger">ยกเลิกการจองคิว</p>
  }

// search data
useEffect(() => {
  try{
    setFilteredCountries(
      reservation.filter((v) =>
       v.reservations_date.includes(search)
       )
     )
  }catch(error){
    HandleAuth(error)
  }
}, [search, reservation]);

  // modal map
  // const ModalMap = () =>{
  //   setModalmap1(!modalmap1)
  // }
  // const CloseModalMap = () =>{
  //   setModalmap1(false)
  // }
  // // modal new
  // const toggle1 = () =>{
  //   setModal1(!modal1)
  //   setErrorMsg(false)
  // }
  // const CloseModal1 = () =>{
  //   setModal1(false)
  // }
  // get maps
  const getmaps = async () =>{
    const { data } = await GetMaps()
    if(data.code === 'OK'){
      setMapsdata(data.results)
    }
  }
  // get member
  const getmember = async () => {
    try{
      const {data} = await GetMember()
      if(data.code === 'OK'){
        setMembers(data.results)
      }

    }catch(error){
      HandleAuth(error)
    }
  }
// show maps
  const showmap = () =>{
    setShomaps(!shomaps)
  }
  const Closeshowmap = () =>{
    setShomaps(false)
  }
  const idmaps = (id) =>{
    setMapId(id)
    showmap()
  }

  // updatemaps
  // const Modelmaps=()=>{
  //   setUpdatemaps(!updatemaps)
  // }
  // const CloseMaps =()=>{
  //   setUpdatemaps(false)
  // }
  // const Getidmaps =(id)=>{
  //   setMapsid(id)
  //   Modelmaps()
  // }

   //modal update 
  const Modalupdate = () =>{
    setModalupdate(!modalupdate)
  }
  const Closeupdate = () => {
    setModalupdate(false)
  }

    // Set Id
    const selects = (id) => {
      setUpdateId(id)
      Modalupdate()
    }
  // modal new
  // const toggle = () => {
  //   setModal(!modal)
  //   setErrorMsg(false)
  // }
  // const CloseModal = () => {
  //   setModal(false)
  // }
  const messErr = () => {
    setErrorMsg(true)
  }
  // const handle = (event) => {
  //   setInputvalue({ ...inputvalue, [event.target.name]: event.target.value })
  // }
  // get reservation
  const GetResrvations = async () =>{
    try{
      const {data} = await GetResrvation()
      if(data.code === 'OK'){
        setReservation(data.results)
      }
    }catch(error){
      HandleAuth(error)
    }
  }
  React.useEffect(() => {
    GetResrvations()
    getmember()
    getmaps()
  }, [])
    return(
        <PortalTemplate>
             <UpdateModal Closeupdate={Closeupdate} modalupdate={modalupdate} updateId={updateId} getResrvation={GetResrvations} messErr={messErr} errorMsg={errorMsg} />
              <Showmaps Closeshowmap={Closeshowmap} mapid={mapid} shomaps={shomaps} errorMsg={errorMsg} messErr={messErr} />
        <div>
          <div className="card cards">
                <div className="card-header span-a">
                        <p className="text-title" >การจองคิว</p>
                    </div>
            <div className="cars-body">
              <div className="row head-search">
                <div className="col-md-2">
                  <label className="mb-0 ">ค้นหา</label>
                  <input
                        type="date"
                        className="Selectd form-control"
                        placeholder="Search Countries"
                        onChange={(e) => setSearch(e.target.value)}
                      />
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
                              <th>ที่อยู่</th>
                              <th>เบอร์โทรศัพท์</th>
                              <th>จำนวนเครื่อง</th>
                              <th>วันที่จองคิว-เลื่อนคิว</th>
                              <th>สถานะ</th>
                              <th></th>
                          </tr>
                        </thead>
                        <tbody>
                          {filteredCountries.map((v,i)=>{
                            return(
                              <tr key={i + 'reservationdata'} >
                              <td className="text-center">{i + 1}</td>
                              <td>{v.firstname}</td>
                              <td>{v.lastname}</td>
                              <td>{v.address}</td>
                              <td>{v.tel}</td>
                              <td >{v.amount}</td>
                              <td>{v.reservations_date.slice(8,-14)}-{v.reservations_date.slice(5,-17)}-{v.reservations_date.slice(0,-20)}{v.reservations_date.slice(10, -8)}</td>
                              <td>{textstatus[v.status]}</td>
                              <td className="text-center">
                              <button className="btn" 
                              onClick={selects.bind(this,v._id)}  
                              data-toggle="tooltip" 
                              data-placement="left" 
                              title="แก้ไข"
                              disabled={v.status !== 'อยู่ระหว่างดำเนินการ' ? true : false}
                              >
                                <i className="far fa-edit" ></i>
                              </button>
                              <button className="btn" onClick={idmaps.bind(this, v._id)} data-toggle="tooltip" data-placement="left" title="แสดงพิกัดแผนที่">
                                <i className="fas fa-map-marked-alt text-success" />
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
