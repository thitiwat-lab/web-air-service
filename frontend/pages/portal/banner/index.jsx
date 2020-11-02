import React, { useState }  from 'react'

// internal
import PortalTemplate from '../../../component/layouts/template'
import {GetBanner} from '../../../service/banner'
import {HandleAuth} from '../../../service/config'
import Modal from '../../../component/banner/createbanner'
import DeleteNewss from '../../../component/banner/deletebanner'
import Modalupdate from '../../../component/banner/updatebanner'
export default () =>{
    const [databanner, setDatabanner] =useState([])
    const [modal, setModal] = useState(false)
    const [errorMsg, setErrorMsg] = React.useState(false)
    const [delet, setDel] = useState(false)
    const [delId, setDelId] = useState('')
    const [updatebanner, setUpdatebanner] = useState(false)
    const [bannerid, setBannerid] =useState('')

    // update
    const Closeupdatemodal = () =>{
        setUpdatebanner(false)
    }
    const modalupdate = () =>{
        setUpdatebanner(!updatebanner)
    }
    const modalid = (id) =>{
        setBannerid(id)
        modalupdate()
    }
    // Delete 
  const CloseDelete = () => setDel(false)
  const delpromotion = () => {
    setDel(true)
  }

  const Iddel = (id) =>{
    setDelId(id)
    delpromotion()
  }

    // create inmome
  const toggle = () => {
    getbanner()
    setModal(!modal)
    setErrorMsg(false)
  }
  const CloseModal = () => {
    setModal(false)
  }
  const messErr = () => {
    setErrorMsg(true)
  }

    const getbanner = async () =>{
        try{
            const {data} = await GetBanner()
            if(data.code === 'OK'){
                setDatabanner(data.results)
            }
        }catch(error){
            HandleAuth(error)
        }
    }

    React.useEffect(()=>{
        getbanner()
    }, [])
    return(
        <PortalTemplate>
            <Modal getbanner={getbanner} CloseModal={CloseModal} messErr={messErr} errorMsg={errorMsg} modal={modal} />
            <DeleteNewss getbanner={getbanner} CloseDelete={CloseDelete} messErr={messErr} errorMsg={errorMsg} delet={delet} delId={delId} />
            <Modalupdate getbanner={getbanner} updatebanner={updatebanner} Closeupdatemodal={Closeupdatemodal} bannerid={bannerid} messErr={messErr} errorMsg={errorMsg} />
            <div>
                <div className="card cards">
                    <div className="card-header span-a ">
                        <p className="text-title" >แบนเนอร์โปรโมชั่น</p>
                    </div>
                    <div className="card-body">
                            {/* <div className="row mt-3 ml-4">
                                     <button className="btn btn-light" onClick={toggle} >
                                        <i className="fas fa-plus-circle"></i> เพิ่ม
                                    </button>
                                </div> */}
                        <div className="col mt-2">
                            <div className="col-md-12 table-responsive">
                                <table className="table table-ml table-bordered table-striped table-hover mt-3">
                                <thead>
                                    <tr>
                                    <th className="text-center">#</th>
                                    <th className="text-center">รูปภาพ</th>
                                    <th></th>
                                </tr>
                                </thead>
                                <tbody>
                                    {databanner.map((v,i)=>{
                                        return(
                                            <tr key={i + 'banner'}>
                                            <td className="text-center">{i + 1}</td>
                                            <td className="text-center"><img src={"http://localhost:3001/banner/images/"+ v.name} className="news-liss-home1" alt="" /></td>
                                            <td className="text-center">
                                            <button className="btn"  data-toggle="tooltip" data-placement="left" title="แก้ไข" onClick={modalid.bind(this, v._id)} >
                                                <i className="far fa-edit" ></i>
                                            </button>
                                            {/* <button className="btn " style={{ color: 'red' }} onClick={Iddel.bind(this, v._id)}  data-toggle="tooltip" data-placement="left" title="ลบรูปภาพ" >
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
