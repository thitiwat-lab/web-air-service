import React, {useState, useEffect} from 'react'
import Homeplate from '../../../component/layouts/homeplate'
import dynamic from 'next/dynamic'

// internal
import {GetResrvation} from '../../../service/reservation'
import {HandleAuth} from '../../../service/config'

let CalendarComponent

const FullCalendar = (props) =>{
  const [calendarLoaded, setCalendarLoaded] = useState(false)


  useEffect(() => {
    try{
      CalendarComponent = dynamic({
        modules: () => ({
          calendar: import('@fullcalendar/react'),
          dayGridPlugin: import('@fullcalendar/daygrid'),
        }),
        render: (props, { calendar: Calendar, ...plugins }) => (
          <Calendar {...props} plugins={Object.values(plugins)} ref={props.myRef} />
        ),
        ssr: false
      })
      setCalendarLoaded(true)
    }catch(error){

    }
    
  })
  let showCalendar = (props) => {
    if ( !calendarLoaded ) return <div>Loading ...</div>
    return (
      <CalendarComponent {...props}/>
    )
  }
  return (
      <div className="row">
        <div className="col-md-2"></div>
        <div className="col-md-8">
          {showCalendar(props)}
        </div>
      </div>
  )
}

export default () => {
  const [reservation, setReservation] =useState([])

  let bb =[{}]
  const dd = reservation.forEach(v=> bb.push({start:v.reservations_date.slice(0, 10), title:v.firstname +' '+ v.lastname + ' ' + v.reservations_date.slice(11, -8)}))

  // get reservation 
   const getreservation = async () =>{
     try{
      const {data} = await GetResrvation()
      if(data.code === 'OK'){
        setReservation(data.results)
      }
     }catch(error){
      HandleAuth(error)
    }
  }
  React.useEffect(()=>{
    getreservation()
    
    }, [dd])
  return (
    <Homeplate>
      <div>
        <div className="row mt-5 mb-5">
          <div className="col-md-1"></div>
          <div className="col-md-10">
          <div className="card">
            <div className="card-header">
              <div className="row">
                <div className="col-md-2"><h3>ปฏิทินการจองคิว</h3></div>
                <div className="col-md-7"></div>
                <div className="col-md-3">
                <div className="btn-group ml-3">
                <a href={"/home/repostreservation"}>
                    <button className="btn btn-primary">
                      &lt; ปฏิทินการจองคิว
                    </button>
                  </a>
                  <a href={"/home/listreservation"}>
                  <button className="btn btn-primary">
                    ตารางการจองคิว &gt;
                  </button>
                  </a>
                </div>
              </div>
              </div>
            </div>
            <div className="card-body">
          <div className="row">
            <div className="col-md-12">
                  <FullCalendar defaultView="dayGridMonth" events={bb}/>
            </div>
          </div>
        </div>
      </div>
      </div>
      </div>
      <div className="container-fluid text-center" style={{height:'60px', backgroundColor:'#99CCFF'}}>
          <marquee style={{fontSize:'24px', color:'#ffffff'}} className="mt-2" direction="left" width="40%" scrollamount="8">“ ศูนย์บริการ ล้างแอร์ ซ่อมแอร์ ติดตั้งแอร์ (ล้างแอร์เริ่มต้นที่ 500 บาท) ”</marquee>
        </div>
    </div>
    </Homeplate>
  )
}
