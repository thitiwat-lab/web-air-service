import React, {useState, useRef} from 'react'
import '../../styles/main.scss'
import mapboxgl from 'mapbox-gl';
import { Button, ModalHeader, ModalFooter, Form } from 'reactstrap'
import classnames from 'classnames'
import { useForm } from 'react-hook-form'

import {GetreservationID} from '../../service/reservation'
import {HandleAuth} from '../../service/config'

const Showmaps = (props) =>{
  const { handleSubmit, register, errors, clearError, setValue } = useForm({
 })
    const [map, setMap] = useState(null);
    const mapContainer = useRef(null);
    const lngs = 100.4930244
    const lats = 13.7248936   
    const zoom = '8'

    const fetchById = async () =>{
          try{
            if (props.mapid) {
            const { data } = await GetreservationID(props.mapid)
              if (data.code === 'OK') {
                setValue('lat', data.results.lat)
                setValue('lng', data.results.lng)
            }
          }
        }catch(error){
          HandleAuth(error)
        }
      } 

    React.useEffect(() => {
        fetchById()
        mapboxgl.accessToken = 'pk.eyJ1IjoidGhpdGl3YXQiLCJhIjoiY2thMHIyNHVhMHYzYzNmbzF0Nzk2dWc0biJ9.XbjkSFDC10BmD-B_HW-OzA';
        const initializeMap = async ({setMap, mapContainer}) => {
          try{
           if (props.mapid) {
            const { data } = await GetreservationID(props.mapid)
              if (data.code === 'OK') {
              const map = new mapboxgl.Map({
                container: mapContainer.current,
                style: "mapbox://styles/mapbox/streets-v11",
                center: [lngs, lats],
                zoom: zoom
              })
              var popup = new mapboxgl.Popup({ offset: 25 }).setHTML(
                "<h6>"+'ชื่อ: '+ data.results.firstname +"</h6>"+"<h6>"+'นามสกุล: '+ data.results.lastname +"</h6>"+
                "<h6>"+'ที่อยู่: '+ data.results.address +"</h6>"+"<h6>"+'เบอร์โทรศัพท์: '+ data.results.tel +"</h6>"
                  );
              let marker = new mapboxgl.Marker({})
                  .setLngLat([data.results.lng, data.results.lat])
                  .setPopup(popup)
                  .addTo(map);

              map.on("load", () => {
                setMap(map);
                map.resize();
              });
            }
          }
        }catch(error){
          HandleAuth(error)
        }
      }
    if (!map) initializeMap({setMap, mapContainer});
      }, [props.mapid, map])
    return(
    <div
        className={classnames('modal fade animated', { 'show fadeInDown': props.shomaps })}
        style={{ display: props.shomaps ? 'block' : 'none', overflowY: 'auto' }}
      >
          <script src='https://api.tiles.mapbox.com/mapbox-gl-js/v1.12.0/mapbox-gl.js'></script>
          <link href='https://api.tiles.mapbox.com/mapbox-gl-js/v1.12.0/mapbox-gl.css' rel='stylesheet' />
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <ModalHeader>พิกัดบ้านลูกค้า</ModalHeader>
            <form>
              {/* {props.errorMsg && <div className="alert alert-danger">Email Duplicate !</div>} */}
              <div className="modal-body">
                <div className="row">
                <div className="col-md-12">
                      <div className="card" style={{height:'500px'}}>
                                  <div ref={el => mapContainer.current = el} className='mapContainer1' />
                                <pre id="coordinates" className="coordinates"></pre>
                          </div>
                        </div>
                    </div>
                    {/* <div className="row">
                  <div className="col-md-6 mt-2">
                    <label htmlFor="Lat" className="mr-sm-2">
                      Lat
                    </label>
                    <input
                      type="text"
                      className={classnames('Selectd form-control',{ 'is-invalid': !!errors.firstname })}
                      name="lat"
                      id="Lat"
                      ref={register}
                      disabled
                    />
                  </div> */}
                  {/* <div className="col-md-6">
                    <label htmlFor="Lng" className="mr-sm-2 mt-2">
                     Lng
                    </label>
                    <input
                      type="text"
                      className={classnames('Selectd form-control',{ 'is-invalid': !!errors.lastname })}
                      name="lng"
                      id="Lng"
                      ref={register}
                      disabled
                    />
                   <div className="invalid-feedback">{errors.lastname && errors.lastname.message}</div> 
                  </div> */}
                  {/* </div> */}
                </div>
              <ModalFooter>
                <Button type="button" className="btn btn-light" onClick={props.Closeshowmap} >
                  ยกเลิก
                </Button>
              </ModalFooter>
            </form>
      </div>
    </div>
</div>
        
    )
}
export default Showmaps