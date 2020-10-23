import React from 'react'
import Head from 'next/head'
// import Link from 'next/link'
import Router from 'next/router'

// internal

import'../../styles/main.scss'
import{LinkActive1} from '../app/menu/link01'
import{Linkfooter} from '../app/menu/linkfooter'

export default ({ children, title = 'Air Condition' }) => {

  const Login = (e) => {
    Router.push('/portal/auth/login')
  }

  return (
    <div>
    <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
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
   
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"/>

        
    </Head>
      <nav className="navbar navbar-expand-lg nb">
          {/* <div className="col-md-4 mt-1" > */}
                <a className="navbar-brand cotext mt-1 home-test" href={'/'}>บริษัทวีซีแอร์เซอร์วิส</a>
          {/* </div> */}
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span className="fas fa-bars"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown" >
            <div className="row">
              <div className="col-md-4"></div>
            <div className="col-md-7">
              <ul className="navbar-nav">
                <LinkActive1 title="หน้าหลัก" to={'/'} />
                <LinkActive1 title="โปรโมชั่น" to="/home/news"/>
                <LinkActive1 title="รายการจองคิว" to="/home/repostreservation" />
              </ul>
            </div>
          <div className="col-md-1">
          <i className="fas fa-user fa-stack1 iconh mt-3 icon-nev" style={{fontSize:'24px'}} onClick={Login}></i>
            </div>         
        </div> 
        </div>
    </nav>
    <div className="info">
         {children}
    </div>
    
    <footer className="footer">
      <div className="row">
        <div className="col-md-3"></div>
        <div className="col-md-3">
          <h3>เกี่ยวกับเรา</h3>
            <ul className="navbar-nav">
              <p><Linkfooter title="> เกี่ยวกับเรา" to="/home/structure"/></p>
          </ul>
        </div>
        <div className="col-md-3" style={{fontSize:'20px'}}>
          <h3>บริการของเรา</h3>
            <ul className="navbar-nav">
              <p ><Linkfooter title="> บริการล้างเครื่องปรัปอากาศ" to="/home/clean" /></p>
              <p ><Linkfooter title="> บริการซ่อมเครื่องปรับอากาศ" to="/home/repair" /></p>
              <p><Linkfooter title="> บริการติดตั้งเครื่องปรับอากาศ" to="/home/installair" /></p>
            </ul>
          </div>
        <div className="col-md-3">
        <h3>พื้นที่บริการ</h3>
        <ul className="navbar-nav">
          <p>&gt; กรุงเทพมหานคร และจังหวัดใกล้เคียง</p>
          </ul>
          <h3>ติดต่อเรา</h3>
        <ul className="navbar-nav">
          <p>&gt; เบอร์โทร: 093-795-5535</p>
          <p>&gt; ไอดีไลน์: 093-795-5535</p>
          </ul>
          </div>
      </div>
      <div className="row mt-3">
        <div className="col-1"></div>
        <div className="col-10 border-top"></div>
        <div className="col-12 text-center mt-3">
          <p>Copyright &copy; 2020 บริษัทวีซีแอร์เซอร์วิส</p>
        </div>
        </div>    
    </footer>
  </div> 
  )
}
