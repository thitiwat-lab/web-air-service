import React, {useState} from 'react'

// internal
import Adminplate from '../../../component/layouts/frontendlayouts'
import { HandleAuth } from '../../../service/config'
import {GetPromotion} from '../../../service/promotion'

export default () =>{
    const [Promotion, setPromotion] = useState([])
    const [inputvalue, setInputvalue] = useState({})
 // search
 const handle = (event) => {
    setInputvalue({ ...inputvalue, [event.target.name]: event.target.value })
  }
  // get Promotion
  const getPromotion = async () =>{
    try{
      const {data} = await GetPromotion(inputvalue)
      if(data.code === 'OK'){
        setPromotion(data.results)
      }
    }catch(error){
      HandleAuth(error)
    }
  }

  React.useEffect(() => {
    getPromotion()
  }, [])
    return(
        <Adminplate>
            <div>
                <div className="card cards">
                    <div className="cars-body">
                        <div className="row ml-3 mt-3">
                            <div className="col-md-2 mt-4">
                            <label className="mb-0 ">ค้นหา</label>
                            <input type="text" className="Selectd form-control" placeholder="กรุณากรอกชื่อโปรโมชั่นเพื่อค้นหา" name="promotion_name" onChange={handle} />
                            </div>
                            <div className="col-md-2 mt-4">
                                <button className="btn btn-light mb-0 mt-4" onClick={getPromotion}>
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
                                    <th>ชื่อโปรโมชั่น</th>
                                    <th>รายละเอียด</th>
                                    <th>ส่วนลด</th>
                                    {/* <th></th> */}
                                </tr>
                                </thead>
                                <tbody>
                                {Promotion.map((v, i)=>{
                                    return(
                                    <tr key={i + 'promotion'}>
                                    <td className="text-center">{i + 1}</td>
                                    <td>{v.promotion_name}</td>
                                    <td>{v.description}</td>
                                    <td>{v.discount}</td>
                                    {/* <td className="text-center">
                                    <button className="btn" onClick={selest.bind(this, v._id)} >
                                        <i className="far fa-edit" ></i>
                                    </button>
                                    <button className="btn " style={{ color: 'red' }} onClick={Iddel.bind(this, v._id)} >
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