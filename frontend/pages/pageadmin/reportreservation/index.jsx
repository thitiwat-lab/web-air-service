import React, {useState} from 'react'
   
// internal
import Adminplate from '../../../component/layouts/frontendlayouts'
import {GetResrvation} from '../../../service/reservation'
import {HandleAuth} from '../../../service/config'


export default () =>{
    const [reservation, setReservation] =useState([])
    const [inputvalue, setInputvalue] = useState({})

    // get reservation
  const GetResrvations = async () =>{
    try{
      const {data} = await GetResrvation(inputvalue)
      if(data.code === 'OK'){
        setReservation(data.results)
      }
    }catch(error){
      HandleAuth(error)
    }
  }
  const handle = (event) => {
    setInputvalue({ ...inputvalue, [event.target.name]: event.target.value })
  }
  React.useEffect(() => {
    GetResrvations()
  }, [])

    return(
        <Adminplate>
          <div>
          <div className="card cards">
            <div className="cars-body">
              <div className="row ml-3 mt-3">
                <div className="col-md-2 mt-4">
                  <label className="mb-0 ">ค้นหา</label>
                  <input type="text" className="Selectd form-control" placeholder="กรุณากรอกชื่อเพื่อค้นหา" name="firstname" onChange={handle} />
                </div>
                  <div className="col-md-2 mt-4">
                    <button className="btn btn-light mb-0 mt-4" onClick={GetResrvations} >
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
                              <th>ที่อยู่</th>
                              <th>เบอร์โทรศัพท์</th>
                              <th className="text-center">จำนวน</th>
                              <th>วันที่จองคิว-เลื่อนคิว</th>
                              <th>สถานะ</th>
                          </tr>
                        </thead>
                        <tbody>
                          {reservation.map((v,i)=>{
                            return(
                              <tr key={i + 'reservationdata'} >
                              <td className="text-center">{i + 1}</td>
                              <td>{v.firstname}</td>
                              <td>{v.lastname}</td>
                              <td>{v.address}</td>
                              <td>{v.tel}</td>
                              <td className="text-center">{v.amount}</td>
                              <td>{v.reservations_date}</td>
                              <td>{v.status}</td>
                              {/* <td className="text-center">
                              <button className="btn" onClick={selects.bind(this,v._id)} >
                                <i className="far fa-edit" ></i>
                              </button>
                              <button className="btn" style={{ color: '#99CCFF' }} onClick={StatusID.bind(this, v._id)} >
                              <i className="fas fa-user-check"></i>
                              </button>
                              <button className="btn " style={{ color: 'red' }} onClick={deleteque.bind(this, v._id)} >
                                <i className="fas fa-trash-alt"></i>
                              </button>
                            </td> */}
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
        </Adminplate>
    )
}