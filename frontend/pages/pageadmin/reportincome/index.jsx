import React, {useState} from 'react'

// internal
import Adminplate from '../../../component/layouts/frontendlayouts'
import {GetIncome} from '../../../service/income'
import { HandleAuth } from '../../../service/config'

export default  () =>{
    const [income, setIncome] = useState([])
    const [inputvalue, setInputvalue] = useState({})

     // get data income
  const getIncomes = async () =>{
    try{
      const {data} = await GetIncome(inputvalue)
      if(data.code === 'OK'){
        setIncome(data.results)
      }
    }catch(error){
      HandleAuth(error)
    }
  }

  const handle = (event) => {
    setInputvalue({ ...inputvalue, [event.target.name]: event.target.value })
  }

  React.useEffect(() => {
    getIncomes()
  }, [])
 
    return(
        <Adminplate>
        <div>
        <div className="card cards">
           <div className="cars-body">
             {/* <div className="row mt-5 ml-4">
                 <button className="btn btn-light" onClick={toggle} >
                     <i className="fas fa-plus-circle"></i> New
                 </button>
                 </div> */}
             <div className="row ml-3 mt-3">
               <div className="col-md-2 mt-4">
                 <label className="mb-0 ">ค้นหา</label>
                 <input type="text" className="Selectd form-control" placeholder="กรุณากรอกชื่อเพื่อค้นหา" name="firstname" onChange={handle}/>
               </div>
                 <div className="col-md-2 mt-4">
                   <button className="btn btn-light mb-0 mt-4" onClick={getIncomes} >
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
                             <th>เบอร์โทรศัพท์</th>
                             <th>9000-15000BTU</th>
                             <th>18000-24000BTU</th>
                             <th>รายละเอียกการซ่อม</th>
                             <th>ราคาซ่อม</th>
                             <th>ส่วนลด</th>
                             <th>ยอดชำระ</th>
                             <th>สถานะการเงิน</th>
                             {/* <th></th> */}
                         </tr>
                       </thead>
                       <tbody>
                         {income.map((v, i)=>{
                           return(
                           <tr key={i + 'income'}>
                             <td className="text-center">{i+1}</td>
                           <td>{v.firstname}</td>
                           <td>{v.lastname}</td>
                           <td>{v.tel}</td>
                           <td>{v.NinethousandBTU}</td>
                           <td>{v.TwelvethousandBTU}</td>
                           <td>{v.repair}</td>
                           <td>{v.pricerepair}</td>
                           <td>{v.promotion}</td>
                           <td>{v.sum}</td>
                           <td>{v.status}</td>
                           {/* <td className="text-center">
                             <button className="btn" onClick={selects.bind(this, v._id)}>
                               <i className="far fa-edit" ></i>
                             </button>
                             <button className="btn"  style={{color:'green'}} onClick={selectstatus.bind(this, v._id)} >
                               <i className="fas fa-check-circle"/>
                             </button>
                             <button className="btn" onClick={selectdetal.bind(this, v._id)} >
                               <i className="fas fa-eye"/>
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