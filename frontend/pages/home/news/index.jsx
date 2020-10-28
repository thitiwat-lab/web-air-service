import React, {useState} from 'react'
import Homeplate from '../../../component/layouts/homeplate'
import axios from 'axios'
// internal
import {GetPromotion} from '../../../service/promotion'
import {HandleAuth} from '../../../service/config'
import {GetBanner, Getimg} from '../../../service/banner'
import {GetNews} from '../../../service/news'
export default () => {

    const [promotion, setPromotion] =useState([])
    const [bannerimge, setBannerimge]=useState('')
    const [newsimg, setNewsimg] =useState([])
    const [t,setT]=useState([]) 
    const [t1,setT1]=useState([])
    const [t2,setT2]=useState([])
    // const ojb = JSON.parse(JSON.stringify(bannerimge))
    // console.log(ojb)
    const getbanner = async () =>{
      try{
        const {data} = await GetBanner()
        if(data.code === 'OK'){
            setT(data.results[0].name)
            setT1(data.results[1].name)
            setT2(data.results[2].name)
          data.results.forEach(element => {
            setBannerimge(element)
          });
        }
      }catch(erroe){
        HandleAuth(erroe)
      }
    }

    const GetNerwsImge = async () =>{
      try{
        const {data} =await GetNews()
        if(data.code === 'OK'){
          setNewsimg(data.results)
        }
      }catch(erroe){
        HandleAuth(erroe)
      }
    }

    const Getdatapromotion = async () =>{
      const {data} = await GetPromotion()
      if(data.code === 'OK'){
        setPromotion(data.results)
      }
    }

    React.useEffect(()=>{
      Getdatapromotion()
      getbanner()
      GetNerwsImge()
      // getimage()
    },[])

  return (
    <Homeplate>
        <div style={{height:'auto', backgroundColor:'#F5F5F5'}}>
          <div className="bg-b-news">
          <div className="row border-bottom">
            <div className="col-md-2"></div>
            <div className="col-md-8">
              <div id="carouselExampleControls" className="carousel slide mt-3 mb-3" data-ride="carousel">
                <div className="carousel-inner">
                        <div className="carousel-item active " >
                        <img src={"http://159.89.195.62:3001/api/banner/images/" + t} className="d-block w-100 carousel-body-img" alt="..."/>
                      </div>
                      <div className="carousel-item" >
                        <img src={"http://159.89.195.62:3001/api/banner/images/" + t1} className="d-block w-100 carousel-body-img" alt="..."/>
                      </div>
                      <div className="carousel-item" >
                        <img src={"http://159.89.195.62:3001/api/banner/images/" + t2} className="d-block w-100 carousel-body-img" alt="..."/>
                      </div>
                </div>
                <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                  <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                  <span className="carousel-control-next-icon" aria-hidden="true"></span>
                  <span className="sr-only">Next</span>
                </a>
              </div>
            </div> 
          </div>
         
            <div className="row mt-3">
              <div className="col-md-10 news-col">
                <div className="card rounded" style={{backgroundColor:'#ffffff'}}>
                  <div className="card-header news-head">
                    <b><p className="news-head-p"> <i className="fas fa-chevron-right"></i> โปรโมชั่น</p></b>
                  </div>
                  <div className="card-body news-body" style={{overflowY:'auto'}}>
                    <div className="row table-responsive">
                    <table className="table table-ml table-bordered table-striped table-hover mt-3">
                          <thead>
                            <tr>
                              <th>ระยะเวลาโปรโมชั่น</th>
                              <th>ชื่อโปรโมชั่น</th>
                              <th>รายละเอียด</th>
                          </tr>
                        </thead>
                        <tbody>
                          {promotion.map((v, i)=>{
                            return(
                            <tr key={i + 'promotion'}>
                            <td>{v.start_date.slice(0, 10)} &nbsp;-&nbsp; {v.end_date.slice(0, 10)}</td>
                            <td>{v.promotion_name}</td>
                            <td>{v.description}</td>
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
