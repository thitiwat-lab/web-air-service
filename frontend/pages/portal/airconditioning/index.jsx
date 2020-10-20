import React, {useState} from 'react'

// internal
import PortalTemplate from '../../../component/layouts/template'
import {GetAir} from '../../../service/airconditioning'
import {HandleAuth} from '../../../service/config'
import AirModel from '../../../component/airconditioning/airmodel'
import DeleteAir from '../../../component/airconditioning/modeldelete'
import UpdateModal from '../../../component/airconditioning/modelupdate'
  
  export default () => {
      const [getAir,setGetAir] = useState([])
      const [modal, setModal] = useState(false)
      const [errorMsg, setErrorMsg] = React.useState(false)
      const [delet, setDel] = useState(false)
      const [delId, setDelId] = useState('')
      const [modalupdate, setModalupdate] = useState(false)
      const [airId, setAirId] = useState('')
      const [inputvalue, setInputvalue] = useState({})

        //modal update 
  const Modalupdate = () =>{
    setModalupdate(!modalupdate)
  }
  const Closeupdate = () => {
    setModalupdate(false)
  }

    // Set Id
    const selects = (id) => {
      setAirId(id)
      Modalupdate()
    }

  // modal new
  const toggle = () => {
    setModal(!modal)
    setErrorMsg(false)
  }
  const CloseModal = () => {
    setModal(false)
  }
  
  const messErr = () => {
    setErrorMsg(true)
  }

  // delete
  const CloseDelete = () => setDel(false)
  const deluser = () => {
    setDel(true)
  }
  const deleteair = (id) => {
    setDelId(id)
    deluser()
  }

  const handle = (event) => {
    setInputvalue({ ...inputvalue, [event.target.name]: event.target.value })
  }
  // getair
      const GetAirs = async () =>{
        try{
          const {data} = await GetAir(inputvalue)
          if(data.code === 'OK'){
            setGetAir(data.result)
          }
        }catch(error){
          HandleAuth(error)
        }
      } 
      React.useEffect(() => {
        GetAirs()
      }, [])
    return(
        <PortalTemplate>
          <AirModel modal={modal} toggle={toggle} messErr={messErr} GetAirs={GetAirs} CloseModal={CloseModal} errorMsg={errorMsg} />
         <DeleteAir CloseDelete={CloseDelete} delId={delId} delet={delet} errorMsg={errorMsg} GetAirs={GetAirs} />
         <UpdateModal getAir={getAir} modalupdate={modalupdate} Closeupdate={Closeupdate} airId={airId} GetAirs={GetAirs} errorMsg={errorMsg} messErr={messErr} />
         <div>
          <div className="card cards">
            <div className="cars-body">
              <div className="row mt-5 ml-4">
                  <button className="btn btn-light" onClick={toggle}>
                      <i className="fas fa-plus-circle"></i> เพิ่ม
                  </button>
                  </div>
              <div className="row ml-3">
                <div className="col-md-3">
                  <label className="mb-0 ">Search</label>
                  <input type="text" className="Selectd form-control" placeholder="Name" name="name_air" onChange={handle} />
                </div>
                  <div className="col-md-2">
                    <button className="btn btn-light mb-0 mt-4" onClick={GetAirs}>
                      <i className="fas fa-search"></i> Search
                    </button>
                  </div>
              </div>
                  <div className="col">
                    <div className="col-md-12 table-responsive">
                        <table className="table table-ml table-bordered table-striped table-hover mt-3">
                          <thead>
                            <tr>
                              <th className="text-center">#</th>
                              <th>Name Air</th>
                              <th>BTU</th>
                              <th>Price</th>
                              <th>Create_date</th>
                              <th>Update_date</th>
                            <th></th>
                          </tr>
                        </thead>
                        <tbody>
                          {getAir.map((v,i)=>{
                            return (
                              <tr key={i + 'getdata'}>
                              <td className="text-center">{i + 1}</td>
                              <td>{v.name_air}</td>
                              <td>{v.btu} </td>
                              <td>{v.price}</td>
                              <td>{v.createAt}</td>
                              <td>{v.updateAt}</td>
                              <td className="text-center" >
                              <button className="btn" onClick={selects.bind(this, v._id)}>
                                <i className="far fa-edit" ></i>
                              </button>
                              <button className="btn " style={{ color: 'red' }} onClick={deleteair.bind(this, v._id)} >
                                <i className="fas fa-trash-alt"></i>
                              </button>
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