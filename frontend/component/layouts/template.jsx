import React, {useEffect, useState} from 'react'
import Head from 'next/head'
// import Link from 'next/link'
import Router from 'next/router'

// internal
import{LinkActive} from '../app/menu/link'
// import Footer from '../app/footer'
import'../../styles/main.scss'
import {GetIDuser} from '../../service/auth'


export default ({ children, title = 'Air Condition Center' }) => {

  const[userid, setUserid] = useState([])
  const [iddata, setIddata] = useState({})
  // console.log(userid)
  // console.log(iddata)
  const CreateHeaders = (headers = {}, options = {}) => {
    const opts = {
      headers: {}
    }
    if (options.json) {
      opts.headers['Content-Type'] = 'application/json'
    }
  
    opts.headers = {
      ...opts.headers,
      ...headers
    }
    if (options.auth) {
      opts.headers['Authorization'] = 'Bearer ' + localStorage.auth
    }
    setIddata(localStorage.auth1)
    return opts
    
  }
    const getall = async ()=>{
      const {data} = await GetIDuser({tel:iddata})
      if(data.code === 'OK'){
        setUserid(data.result)
      }
    }

  const Logout = (e) => {
    e.preventDefault()
    localStorage.removeItem('auth')
    Router.push('/')
  }
  const open1 = (e) =>{
    '#sidebarToggle'
    e.preventDefault();
    $("body").toggleClass("sb-sidenav-toggled");
}

  useEffect(() => {
    if (!localStorage.auth) {
      Router.push('/portal/auth/login')
    }
    getall()
    CreateHeaders()
  }, [iddata])

  return (
    <div id="app">
    <Head>
    <title>{title}</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
     <meta charSet="utf-8" />
      {/* <meta http-equiv="X-UA-Compatible" content="IE=edge" /> */}
      <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
      <meta name="description" content="" />
      <meta name="author" content="" />
    <link
      rel="stylesheet"
      href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
      integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
      crossOrigin="anonymous"
    />
    <link
      rel="stylesheet"
      href="https://use.fontawesome.com/releases/v5.7.2/css/all.css"
      integrity="sha384-fnmOCqbTlWIlj8LyTjo7mOUStjsKC4pOpQbqyi7RrhN7udi9RwhKkMHpvLbHG9Sr"
      crossOrigin="anonymous"
    />
    <script src="https://code.jquery.com/jquery-3.4.1.slim.min.js" integrity="sha384-J6qa4849blE2+poT4WnyKhv5vZF5SrPo0iEjwBvKU7imGFAV0wwj1yYfoRSJoZ+n" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js" integrity="sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6" crossorigin="anonymous"></script>
    <script src='https://api.tiles.mapbox.com/mapbox-gl-js/v1.12.0/mapbox-gl.js'></script>
    <link href='https://api.tiles.mapbox.com/mapbox-gl-js/v1.12.0/mapbox-gl.css' rel='stylesheet' />
    <script src="js/reactjs/main.js" type = "text/babel"></script>
  </Head>

<nav className="sb-topnav navbar-expand navbar bg-header">
    <a className="navbar-brand"  style={{color:'#ffffff'}}>บริษัทวีซีแอร์เซอร์วิส</a>
    <button className="btn btn-sm " style={{fontSize:'24px'}} id="sidebarToggle" onClick={open1}><i className="fas fa-bars"></i></button>
    <div className="navbar-nav1">
    <div className="dropdown">
           <i className="fas fa-user fa-stack icon" style={{fontSize:24}} id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"></i>
             <div className="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuButton">
                <a className="dropdown-item"href="/portal/updateprofile"> แก้ไขบัญชี</a>
                <a className="dropdown-item"href="/portal/resetpassword"> ความปลอดภัย</a>
                <a onClick={Logout} className="dropdown-item"><i className="fas fa-power-off"></i> ออกจากระบบ</a>
              </div>
          </div>
    </div>
</nav>
<div id="layoutSidenav">
    <div id="layoutSidenav_nav">
        <nav className="sb-sidenav accordion sb-sidenav-dark" id="sidenavAccordion">
            <div className="sb-sidenav-menu">
                <div className="nav">
                  <div>
                    {userid.map((v,i)=>{
                      return(
                        <div key={i+'auth'}>
                          <div className="row">
                            <p className="headnev" style={{fontSize:'42px'}}><i className="fas fa-user-circle"></i></p>
                          </div>
                          <div className="row">
                          <p className="headnev1" style={{fontSize:'18px'}}>ชือ: {v.firstname} นามสกุล: {v.lastname}</p>
                          </div>
                          <div className="row " >
                            <p className="text-center margin-status-tamplate">สิทธิเข้าใช้งาน: {v.userrights}</p>
                          </div>
                        </div>
                      )
                    })}
                  </div>
                    <ul className="demo">
                        <LinkActive title="การจองคิว" to="/portal/reservation" icon="fas fa-address-book" />   
                        {/* <LinkActive title="พนักงาน" to="/portal" icon="fas fa-user" /> */}
                        <LinkActive title ="ข้อมูลลูกค้า" to="/portal/member" icon="fas fa-users"/>
                        <LinkActive title="ข้อมูลพิกัดบ้านลูกค้า" to="/portal/tablemaps" icon="fas fa-map-marker-alt" />
                        <LinkActive title="ประมวลผลค่าใช้จ่าย" to="/portal/Incomes" icon="fas fa-calculator" />
                        <LinkActive title="โปรโมชั่น" to="/portal/promotion" icon="fas fa-address-card" />
                        <LinkActive title="รายงาน" to="/portal/report" icon="fas fa-list" />
                        <LinkActive title="รายละเอียดการให้บริการ" to="/portal/news" icon="fas fa-newspaper" />
                        <LinkActive title="แบนเนอร์โปรโมชั่น" to="/portal/banner" icon="fas fa-images" />
                        <LinkActive title="พื้นที่ให้บริการ" to ="/portal/maps" icon="fas fa-map-marked-alt" />
                    </ul> 
                </div>
            </div>
            {/* <div className="sb-sidenav-footer">
                <div className="small">Logged in as:</div>
            </div> */}
        </nav>
    </div>
    <div id="layoutSidenav_content">
        <main>
            {children}
        </main>
        <footer className="bg-footerd">
            <div className="container-fluid">
                <div className="text-center mt-4">
                  <p>Copyright &copy; 2020 บริษัทวีซีแอร์เซอร์วิส</p>
                    </div>
                </div>
            </footer>
        </div>
    </div>
</div>
  )
}
