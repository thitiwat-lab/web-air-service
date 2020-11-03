import React, {useState, useEffect} from 'react'
import axios from "axios";
import Link from 'next/link'

import {CreateHeaders} from '../../../service/config'
import Homeplate from '../../../component/layouts/homeplate'
import{HandleAuth}from '../../../service/config'
import{Getdate} from '../../../service/reservation'
export default () => {
  const [search, setSearch] = useState("");
  const [filteredCountries, setFilteredCountries] = useState([]);
  const [countries, setCountries] = useState({});
  const test = []
  const entries = test.push(countries)
  const getstatus = async () =>{
    try{
      const {data} = await Getdate({status:'อยู่ระหว่างดำเนินการ'})
      if(data.code === 'OK'){
        setCountries(data.result)
      }
    }catch(error){
      HandleAuth(error)
    }
  }
    // useEffect( () => {
    //    axios({
    //     url:'http://localhost:3001/reservations',
    //     method:'get',
    //   ...CreateHeaders({}, {
    //     json: true,
    //     auth: true 
    //   })
    //   }).then((res) => {
    //     setCountries(res.data.results);
    //   })
    //   .catch((err) => {
    //   })
    // }, []);
    
    useEffect(() => {
      try{
        setFilteredCountries(
          test.filter((v) =>
           v.reservations_date.includes(search)
           )
         )
      }catch(error){
        HandleAuth(error)
      }
    }, [search, countries]);

  const textstatus = {
    อยู่ระหว่างดำเนินการ:<p className="text-warning">อยู่ระหว่างดำเนินการ</p>,
    ล้างแล้ว:<p className="text-success">ล้างแล้ว</p>,
    ยกเลิกการจองคิว:<p className="text-danger">ยกเลิกการจองคิว</p>
  }
  React.useEffect(() =>{
    getstatus()
  },[])
    return(
        <Homeplate>
        <div className="backg-reservation" style={{ overflowY: 'auto' }}>
          <div className="row">
            <div className="col-md-1"></div>
            <div className="col-md-10">
              <div className="card cards list-data-reservation">
                <div className="card-header">
                  <div className="row">
                    <div className="col-md-2">
                      <h4>รายการจองคิว</h4>
                    </div>
                    <div className="col-md-7"></div>
                    <div className="col-md-3">
                      <Link href="/home/repostreservation">
                      <button className="btn btn-primary">
                        &lt; ปฏิทินการจองคิว
                      </button>
                    </Link>
                    <Link href="/home/listreservation">
                    <button className="btn btn-primary">
                      ตารางการจองคิว &gt;
                    </button>
                    </Link>
                    </div>
                  </div>
                  
                </div>
                <div className="cars-body">
                  <div className="row ml-3 mt-3">
                    <div className="col-md-2">
                    <label className="">ค้นหา</label>
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
                                  <th>วันที่จองคิว</th>
                                  <th>เวลาจองคิว</th>
                                  <th>จำนวนเครื่อง</th>
                                  <th>สถานะ</th>
                              </tr>
                            </thead>
                            <tbody>
                            {filteredCountries.map((v,i)=>{
                                return(
                                  <tr key={i + 'reservationdata'} >
                                  <td className="text-center">{i + 1}</td>
                                  <td>{v.reservations_date.slice(8,-14)}-{v.reservations_date.slice(5,-17)}-{v.reservations_date.slice(0,-20)}</td>
                                  <td>{v.reservations_date.slice(11, -8)}</td>
                                  <td>{v.amount}</td>
                                  <td>{textstatus[v.status]}</td>
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
          </div>
        </div>
        <div className="container-fluid text-center" style={{height:'60px', backgroundColor:'#99CCFF'}}>
          <marquee style={{fontSize:'24px', color:'#ffffff'}} className="mt-2" direction="left" width="40%" scrollamount="8">“ ศูนย์บริการ ล้างแอร์ ซ่อมแอร์ ติดตั้งแอร์ (ล้างแอร์เริ่มต้นที่ 500 บาท) ”</marquee>
        </div>
    </Homeplate>
    )
}