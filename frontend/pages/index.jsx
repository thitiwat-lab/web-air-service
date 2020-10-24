import React from 'react'
import { useState } from 'react'
import Frontend from '../component/layouts/homeplate'
import{Linkfooter} from '../component/app/menu/linkfooter'

import {GetNews} from '../service/news'

export default () => {
  const [metadata, setMetadata] = useState('')
  const [metadata01, setMetadata01] = useState('')
  const [metadata02, setMetadata02] = useState('')
  const [metadata03, setMetadata03] = useState('')
  const [metadata04, setMetadata04] = useState('')
  const [metadata05, setMetadata05] = useState('')

  const getnews =async () =>{
    const { data } =await GetNews()
    if(data.code === 'OK'){
      setMetadata(data.results[0].name)
      setMetadata01(data.results[0].detail)
      setMetadata02(data.results[1].name)
      setMetadata03(data.results[1].detail)
      setMetadata04(data.results[2].name)
      setMetadata05(data.results[2].detail)
      }
    }
React.useEffect(()=>{
  getnews()
},[])

  return (
    <Frontend>
      <div style={{backgroundColor:'#ffffff'}} >
        <div className="container fluid border shadow-sm p-3" style={{ background: 'url(02.jpg)'}}>
          <div className="row">
            <div className="col-md-3 ">
            </div>
            <div className="col-md-6 text-center ">
              <p className="text">บริษัทวีซีแอร์เซอร์วิส</p>
              <p className="text-1">ศูนย์บริการ ล้างแอร์ ซ่อมแอร์ ติดตั้งแอร์ </p><hr/>
            </div>
          </div>
        </div>
            <div className="container mt-5">
              <div className="row">
                <div className="col-md-4">
                <div className="card">
                    <a href={"home/clean"}>
                          <img src={"http://localhost:3001/news/imgpath/" + metadata} className="card-img-top cardimg" alt="..."/>
                    </a>
                  <div className="card-body " style={{height:'260px'}}>
                    <h4>บริการล้างเครื่องปรับอากาศ</h4><hr/>
                      <p className="cardfont">{metadata01}</p>
                  </div>
                </div>
                </div>
                <div className="col-md-4">
                <div className="card">
                  <a href={"home/repair"}>
                        <img src={"http://localhost:3001/news/imgpath/" + metadata02}  className="card-img-top cardimg" alt="..."/>
                  </a>
                  <div className="card-body" style={{height:'260px'}}>
                  <h4>บริการซ่อมเครื่องปรับอากาศ</h4><hr/>
                    <p className="cardfont">{metadata03}</p>
                  </div>
                </div>
                </div>
                <div className="col-md-4">
                <div className="card">
                  <a href={"home/installair"}>
                      <img src={"http://localhost:3001/news/imgpath/" + metadata04} className="card-img-top cardimg" alt="..."/>
                  </a>
                  <div className="card-body" style={{height:'260px'}}>
                  <h4>บริการติดตั้งเครื่องปรับอากาศ</h4><hr/>
                    <p className="cardfont" >{metadata05}</p>
                  </div>
                  </div>
                </div>
              </div>
              <div className="row mt-3">
                <div className="col-8">
                  <img className="cardimg01 " src="03.png" alt=""/>
                </div>
                <div className="col-md-4 text-center">
                  <b><p className="mb-0">“ ศูนย์บริการ ล้างแอร์ ซ่อมแอร์ ติดตั้งแอร์ ”</p></b>
                  <p className="mb-0" style={{color:'red'}}>(ล้างแอร์เริ่มต้นที่ 500 บาท)</p>
                  <p className="mb-0">เลือกบริการที่หลากหลาย บริการระดับมืออาชีพ ยินดีให้บริการทุกงานแอร์ เข้าใจสิ่งแวดล้อมบริการด้วยใจ</p>
                  <p className="mb-3">โทรเลย: 093-795-5535</p>
                </div>
              </div>
          </div>
          </div>
          <div className="container-fluid text-center" style={{height:'60px', backgroundColor:'#99CCFF'}}>
          <marquee style={{fontSize:'24px', color:'#ffffff'}} className="mt-2" direction="left" width="40%" scrollamount="8">“ ศูนย์บริการ ล้างแอร์ ซ่อมแอร์ ติดตั้งแอร์ (ล้างแอร์เริ่มต้นที่ 500 บาท) ”</marquee>
          </div>
    </Frontend>
  )
}
