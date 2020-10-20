import React,{useState, useRef} from 'react'
import { Button, ModalHeader, ModalFooter, Form } from 'reactstrap'
import classnames from 'classnames'
import { useForm } from 'react-hook-form'
import mapboxgl from 'mapbox-gl';
import '../../styles/main.scss'

import {CreateMaps} from '../../service/maps'
import {HandleAuth} from '../../service/config'
import {GetIdMember} from '../../service/member'
import {CreateMapsMemberSchema} from '../../schema/maps'

const ModelMap = props =>{
    const { handleSubmit, register, errors, clearError, setValue } = useForm({
        validationSchema: CreateMapsMemberSchema
     })
      const [map, setMap] = useState(null);
      const mapContainer = useRef(null);
      const lngs = 100.4930244
      const lats = 13.7248936
      const zoom = '8'
      const [markerlng, setMarkerlng]=useState()
      const [markerlal, setMarkerlat]=useState()
    //  getid map
     const fetchById = async () =>{
       try{
        if(props.mapid){
          const {data} = await GetIdMember(props.mapid)
          if(data.code === 'OK') {
            setValue('firstname', data.results.firstname)
            setValue('lastname', data.results.lastname)
            setValue('address', data.results.address)
            setValue('tel', data.results.tel)
          }
        }
       } catch (error){
        HandleAuth(error)
      }
     }
     const Closemaps = () =>{
      clearError()
      setValue('lat', '')
      setValue('lng', '')
    props.CloseModalMap()
   }
    
     const onSubmit = handleSubmit(async values => {
        try {
          const { data } = await CreateMaps(
            values.firstname, 
            values.lastname, 
            values.address, 
            values.tel,
            values.lat,
            values.lng,
            )
          if (data.code === 'OK') {
            clearError()
            props.getmaps()
            props.CloseModalMap()
          } else {
            props.messErr()
          }
        } catch (error) {
          HandleAuth(error)
        }
    })
    
     React.useEffect(() => {
      mapboxgl.accessToken = 'pk.eyJ1IjoidGhpdGl3YXQiLCJhIjoiY2thMHIyNHVhMHYzYzNmbzF0Nzk2dWc0biJ9.XbjkSFDC10BmD-B_HW-OzA';
      const initializeMap = ({setMap, mapContainer}) => {
        const map = new mapboxgl.Map({
          container: mapContainer.current,
          style: "mapbox://styles/mapbox/streets-v11",
          center: [lngs, lats],
          zoom: zoom
        })
        map.addControl(
          new mapboxgl.GeolocateControl({
          positionOptions: {
          enableHighAccuracy: true
          },
          trackUserLocation: true
          })
          );
          var marker = new mapboxgl.Marker({
            draggable: true
            })
            .setLngLat([lngs, lats])
            .addTo(map);

           const onDragEnd = () => {
            var lngLat = marker.getLngLat();
            coordinates.style.display = 'block';
            setMarkerlng(lngLat.lng)
            setMarkerlat(lngLat.lat)
            coordinates.innerHTML =
            'Longitude: ' + lngLat.lng + '<br />Latitude: ' + lngLat.lat;
            }
            marker.on('dragend', onDragEnd)

        map.on("load", () => {
          setMap(map);
          map.resize();
        });
      };
      if (!map) initializeMap({setMap, mapContainer});
      fetchById()
    }, [map,props.mapid])
     return(
        <div
        className={classnames('modal fade animated', { 'show fadeInDown': props.modalmap })}
        style={{ display: props.modalmap ? 'block' : 'none', overflowY: 'auto' }}
      >
          <script src='https://api.tiles.mapbox.com/mapbox-gl-js/v1.12.0/mapbox-gl.js'></script>
          <link href='https://api.tiles.mapbox.com/mapbox-gl-js/v1.12.0/mapbox-gl.css' rel='stylesheet' />
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <ModalHeader>เพิ่มพิกัดบ้านลูกค้า</ModalHeader>
            <form onSubmit={onSubmit}>
              {/* {props.errorMsg && <div className="alert alert-danger">Email Duplicate !</div>} */}
              <div className="modal-body">
                <div className="row">
                <div className="col-md-6 mt-2">
                <input
                    type="hidden"
                    name="member_id"
                    id="member_id"
                    ref={register}
                  />
                  <label htmlFor="firstname" className="mr-sm-2">
                    ชื่อ
                  </label>
                  <input
                    type="text"
                    className={classnames('Selectd form-control',{ 'is-invalid': !!errors.firstname })}
                    name="firstname"
                    id="firstname"
                    ref={register}
                    disabled
                  />
                  <div className="invalid-feedback">{errors.firstname && errors.firstname.message}</div>
                </div>
                <div className="col-md-6">
                  <label htmlFor="lastname" className="mr-sm-2 mt-2">
                    นามสกุล
                  </label>
                  <input
                    type="text"
                    className={classnames('Selectd form-control',{ 'is-invalid': !!errors.lastname })}
                    name="lastname"
                    id="lastname"
                    ref={register}
                    disabled
                  />
                  <div className="invalid-feedback">{errors.lastname && errors.lastname.message}</div>
                </div>   
                <div className="col-md-12">
                  <label htmlFor="tel" className="mr-sm-2 mt-2">
                    เบอร์โทร
                  </label>
                  <input
                    type="text"
                    className={classnames('Selectd form-control',{ 'is-invalid': !!errors.tel })}
                    name="tel"
                    id="tel"
                    ref={register}
                    disabled
                  />
                  <div className="invalid-feedback">{errors.tel && errors.tel.message}</div>
                </div>
                <div className="col-md-12">
                  <label htmlFor="address" className="mr-sm-2 mt-2">
                    ที่อยู่
                  </label>
                  <input
                    type="text"
                    className={classnames('Selectd form-control',{ 'is-invalid': !!errors.address })}
                    name="address"
                    id="address"
                    ref={register}
                  />
                <div className="invalid-feedback">{errors.address && errors.address.message}</div>
                </div>
                <div className="col-md-12">
                  <label htmlFor="maps" className="mr-sm-2 mt-2">
                      Maps
                    </label>
                      <div className="card" style={{height:'500px'}}>
                                  <div ref={el => mapContainer.current = el} className='mapContainer1' />
                                <pre id="coordinates" className="coordinates"></pre>
                          </div>
                      </div>
                    </div>
                <div className="row">
                  <div className="col-md-6 mt-2">
                    <label htmlFor="Lat" className="mr-sm-2">
                      Lat
                    </label>
                    <input
                      type="text"
                      className={classnames('Selectd form-control',{ 'is-invalid': !!errors.firstname })}
                      name="lat"
                      id="Lat"
                      value={markerlal}
                      ref={register}
                    />
                    {/* <div className="invalid-feedback">{errors.firstname && errors.firstname.message}</div> */}
                  </div>
                  <div className="col-md-6">
                    <label htmlFor="Lng" className="mr-sm-2 mt-2">
                     Lng
                    </label>
                    <input
                      type="text"
                      className={classnames('Selectd form-control',{ 'is-invalid': !!errors.lastname })}
                      name="lng"
                      id="Lng"
                      value={markerlng}
                      ref={register}
                    />
                    {/* <div className="invalid-feedback">{errors.lastname && errors.lastname.message}</div> */}
                  </div>
                  </div>
                </div>
              
              <ModalFooter>
                <Button type="submit" className="btn btn-primary">
                  ยืนยัน
                </Button>
                <Button type="button" className="btn btn-light" onClick={Closemaps} >
                  ยกเลิก
                </Button>
              </ModalFooter>
            </form>
          </div>
        </div>
      </div>
     )
}
export default ModelMap
