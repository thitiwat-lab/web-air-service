import React ,{useState} from 'react'
import { Button, ModalHeader, ModalFooter, Form } from 'reactstrap'
import classnames from 'classnames'
import { useForm } from 'react-hook-form'


import {HandleAuth} from '../../service/config'
import {UpdateStatus} from '../../schema/reservation'
import {GetreservationID, Reservationmaps} from '../../service/reservation'
import {Getmapsone} from '../../service/maps'

const Maps = props =>{
    const [idtel, setIdtel] = useState({})
    const [deta, setDeta] =useState([])
    const [inputvalue, setInputvalue] =useState('')
   const sub = inputvalue.toString()
   const test =sub.split(",")
  const lat = test[0]
  const lng =test[1]
  const addr = test[2]

  const { handleSubmit, register, errors, setValue, clearError } = useForm({
    validationSchema: UpdateStatus
  })
  const handle = (event) => {
    setInputvalue(event.target.value )
  }
  const fetchById = async () => {
    try {
      if (props.mapsid) {
        const { data } = await GetreservationID(props.mapsid)
        if (data.code === 'OK') {
         setIdtel(data.results.tel)
        } else {
          props.messErr()
        }
      }
    } catch (error) {
      HandleAuth(error)
    }
  }
  const Getmaps= async()=>{
    try{
        if({tel:idtel}){
            const {data} = await Getmapsone({tel:idtel})
            if(data.code === 'OK'){
                setDeta(data.results)
            }
        }
    }catch (error) {
      HandleAuth(error)
    }
  }
  const onSubmit = handleSubmit(async(value)=>{
    try{
      if(props.mapsid){
        const {data} = await Reservationmaps(props.mapsid, value)
        if(data.code === 'OK'){
          clearError()
          props.getResrvation()
          props.CloseMaps()
        }
    }
    }catch (error) {
      console.log(error)
      HandleAuth(error)
    }
  })
  React.useEffect(() => {
    fetchById()
    Getmaps()
  },[props.mapsid, idtel])

    return(
        <div
        className={classnames('modal fade animated', { 'show fadeInDown': props.updatemaps })}
        style={{ display: props.updatemaps ? 'block' : 'none' }}
      >
        <div className="modal-dialog modal-box-shadown">
          <div className="modal-content">
            <Form onSubmit={onSubmit}>
            <ModalHeader>เปลี่ยนพิกัดบ้านลูกค้า</ModalHeader>
            <div className="modal-body">
                <div className="col-md-12">
                  <label htmlFor="" className="mr-sm-2">
                    ที่อยู่
                  </label>
                  <select className="Selectd form-control" name="" id="" ref={register} onChange={handle} value={''} >
                    <option>กรุณาเลือกที่อยู่ใหม่</option>
                    {deta.map((v,i)=>{
                        return(
                        <option value={[v.lat, v.lng, v.address]} key={i + 'maps'}>{v.address}</option>
                        )
                    })}
                  </select>
                  <input type="hidden" name="lat" id="lat" value={lat} ref={register}/>
                  <input type="hidden" name="lng" id="lng" value={lng} ref={register}/>
                  <input type="hidden" name="address" id="address" value={addr} ref={register} />
                </div>
              <ModalFooter className="mt-3">
                  <Button type="submit" className="btn btn-primary" >
                      ยืนยัน
                  </Button>
                  <Button type="button" className="btn btn-light" onClick={props.CloseMaps}>
                      ยกเลิก
                  </Button>
              </ModalFooter>
            </div>
            </Form>
          </div>
        </div>
      </div>
    )
}
export default Maps