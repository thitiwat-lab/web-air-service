import React, {useState} from 'react'

// 
import PortalTemplate from '../../../component/layouts/template'
import {GetMaps} from '../../../service/maps'
import {HandleAuth} from '../../../service/config'
import Updatemaps from '../../../component/maps/updatemaps'
import DeletedMaps from '../../../component/maps/deletemaps'
import Showmaps from '../../../component/tablemaps/showmaps'
import DetailMapss from '../../../component/listdetail/detailmap'

export default () =>{
  const [mapsdata, setMapsdata] = useState([])
  const [mapsID, setMapsID] = useState('')
  const [updatemodel, setUpdatemodel] = useState(false)
  const [errorMsg, setErrorMsg] = React.useState(false)
  const [delet, setDel] = useState(false)
  const [delId, setDelId] = useState('')
  const [mapid, setMapId] =useState('')
  const [shomaps, setShomaps] = useState(false)
  const [detailuser, setDetailuser] = useState(false)
  const [detailId, setDetailId] = useState('')
   // detail
   const detail =()=>{
    setDetailuser(!detailuser)
  }
  const CloseDetail =()=>{
    setDetailuser(false)
  }
  const dtId =(id)=>{
    setDetailId(id)
    detail()
  }
// show maps
  const showmap = () =>{
    setShomaps(!shomaps)
  }
  const Closeshowmap = () =>{
    setShomaps(false)
  }
  const idmaps = (id) =>{
    setMapId(id)
    showmap()
  }
  // delete
  const CloseDelete = () => setDel(false)
  const delmaps = () => {
    setDel(true)
  }
  const delmember = (id) => {
    setDelId(id)
    delmaps()
  }

  //update model
  const updatemodal = () =>{
    setUpdatemodel(!updatemodel)
  } 
  const Closemaps = () =>{
    setUpdatemodel(false)
  }
  const Mapsid = (id)=>{
    setMapsID(id)
    updatemodal()
  }
  const messErr = () =>{
    setErrorMsg(true)
  }
  // getmaps
  const getmaps = async () =>{
    try{
      const { data } = await GetMaps()
       if(data.code === 'OK'){
        setMapsdata(data.results)
        }
      }catch(error){
        HandleAuth(error)
      }
    }
  
  React.useEffect(()=>{
    getmaps()
  },[])
    return(
        <PortalTemplate>
            <Updatemaps updatemodel={updatemodel} getmaps={getmaps} errorMsg={errorMsg} messErr={messErr} Closemaps={Closemaps} mapsID={mapsID} />
            <DeletedMaps delId={delId} delet={delet} CloseDelete={CloseDelete} getmaps={getmaps} errorMsg={errorMsg} messErr={messErr} />
            <Showmaps Closeshowmap={Closeshowmap} mapid={mapid} shomaps={shomaps} errorMsg={errorMsg} messErr={messErr} />
            <DetailMapss detailuser={detailuser} detailId={detailId} CloseDetail={CloseDetail} />
            <div>
          <div className="card cards">
            <div className="card-header span-a ">
                        <p className="text-title" >ข้อมูลพิกัดบ้านลูกค้า</p>
                    </div>
            <div className="cars-body">
              <div className="row head-search">
                <div className="col-md-2">
                  <label className="mb-0 ">ค้นหา</label>
                  <input type="text" className="Selectd form-control" placeholder="กรุณากรอกชื่อเพื่อค้นหา" name="firstname"/>
                </div>
                  <div className="col-md-2">
                    <button className="btn btn-light mb-0 mt-4">
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
                              {/* <th>ที่อยู่</th> */}
                              <th>เบอร์โทรศัพท์</th>
                              {/* <th>ละติจูด</th>
                              <th>ลองจิจูด</th> */}
                              <th></th>
                          </tr>
                        </thead>
                        <tbody>
                          {mapsdata.map((v, i)=>{
                            return(
                              <tr key={i + 'mapsmember'}>
                                <td className="text-center">{i + 1}</td>
                                <td><p onClick={dtId.bind(this, v._id)} className="text-detail-all text-detail-all1">{v.firstname}</p></td>
                                <td>{v.lastname}</td>
                                {/* <td>{v.address}</td> */}
                                <td>{v.tel}</td>
                                {/* <td>{v.lat}</td>
                                <td>{v.lng}</td> */}
                                <td className="text-center">
                                <button className="btn" onClick={Mapsid.bind(this, v._id)}  data-toggle="tooltip" data-placement="left" title="แก้ไข" >
                                  <i className="far fa-edit" ></i>
                                </button>
                                <button className="btn" onClick={idmaps.bind(this,v._id)}  data-toggle="tooltip" data-placement="left" title="แสดงพิกัดแผนที่">
                                 <i className="fas fa-map-marked-alt text-success" />
                                </button>
                                {/* <button className="btn " style={{ color: 'red' }} onClick={delmember.bind(this,v._id)}  data-toggle="tooltip" data-placement="left" title="ลบที่อยู่">
                                  <i className="fas fa-trash-alt"></i>
                                </button> */}
                              </td>
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
        </PortalTemplate>
    )
}