import React, {useState, useEffect} from 'react'

import {GetIncome} from '../../../service/income'
import { HandleAuth } from '../../../service/config'
import PortalTemplate from '../../../component/layouts/template'

export default () => {
  const [income, setIncome] = useState([])
  const [search, setSearch] = useState("")
  const [filteredCountries, setFilteredCountries] = useState([]);

  const test = filteredCountries.reduce((p, v) => 
  p + parseInt(v.sum),0
)

  // search data
 useEffect(() => {
  try{
    setFilteredCountries(
      income.filter((v) =>
       v.create_data.includes(search)
       )
     )
  }catch(error){
    HandleAuth(error)
  }
}, [search, income]);
useEffect(() => {
  try{
    setFilteredCountries(
      income.filter((v) =>
       v.create_data.includes(search.slice(0, 7)),
       )
     )
  }catch(error){
    HandleAuth(error)
  }
}, [income, search]);
useEffect(() => {
  try{
    setFilteredCountries(
      income.filter((v) =>
       v.create_data.includes(search.slice(0, 4)),
       )
     )
  }catch(error){
    HandleAuth(error)
  }
}, [income, search]);

 // get data income
 const getIncomes = async () =>{
    try{
      const {data} = await GetIncome()
      if(data.code === 'OK'){
        setIncome(data.results)
    //     setTest(data.results.reduce((p, v) => 
    //           p + parseInt(v.sum),0
    //   ),
    // ) 
  }
    }catch(error){
      HandleAuth(error)
    }
  }
  React.useEffect(() =>{
    getIncomes()
  },[])
    return(
        <PortalTemplate>
        <div>
         <div className="card cards">
                <div className="card-header span-a ">
                        <p className="text-title" >รายงานรายรับรายจ่าย</p>
                    </div>
            <div className="cars-body">
            <div className="row ml-3 mt-2">
                <div className="col-md-2">
                  <label className="mb-0 ">ค้นหารายวัน</label>
                  <input
                        type="date"
                        className="Selectd form-control"
                        onChange={(e) => setSearch(e.target.value)}
                      />
                </div>
                <div className="col-md-2">
                  <label className="mb-0 ">ค้นหารายเดือน</label>
                  <input
                        type="date"
                        className="Selectd form-control"
                        onChange={(e) => setSearch(e.target.value)}
                      />
                </div>
                <div className="col-md-2">
                  <label className="mb-0 ">ค้นหารายปี</label>
                  <input
                        type="date"
                        className="Selectd form-control"
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
                              <th>เบอร์โทรศัพท์</th>
                              <th>9000-15000BTU</th>
                              <th>18000-24000BTU</th>
                              <th>ราคาซ่อม</th>
                              <th>ส่วนลด</th>
                              <th>ยอดชำระ</th>
                          </tr>
                        </thead>
                        <tbody>
                          {filteredCountries.map((v, i)=>{
                            return(
                            <tr key={i + 'income'}>
                              <td className="text-center">{i+1}</td>
                            <td>{v.firstname}</td>
                            <td>{v.lastname}</td>
                            <td>{v.tel}</td>
                            <td>{v.NinethousandBTU}</td>
                            <td>{v.TwelvethousandBTU}</td>
                            <td>{v.pricerepair}</td>
                            <td>{v.promotion}</td>
                            <td>{v.sum}</td>
                            </tr>
                            )
                          })}
                        </tbody>
                      </table>
                      <div className="row mb-4">
                        <div className="col-md-10"></div>
                        <div className="col-md-2">
                          <label htmlFor="">ผลรวมรายรับรายจ่าย</label>
                           <input type="text" value={test+" บาท"} className="Selectd form-control"/>
                        </div>
                      </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    </PortalTemplate>
    )
}