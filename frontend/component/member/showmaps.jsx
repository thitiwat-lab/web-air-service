import React,{useState, useRef} from 'react'
import { Button, ModalHeader, ModalFooter, Form } from 'reactstrap'
import classnames from 'classnames'
import { useForm } from 'react-hook-form'
import mapboxgl from 'mapbox-gl';
import '../../styles/main.scss'

import {GetIdMember} from '../../service/member'
import {HandleAuth} from '../../service/config'


const ShowMaps = props =>{
    const [map, setMap] = useState(null);
    const mapContainer = useRef(null);
    const lngs = 100.4930244
    const lats = 13.7248936
    const zoom = '8'
    const [moves, setMoevs] =useState({})
    const [markershow, setMarkershow]=useState({})
    // const [markerlat, setMarkerlat]=useState()
    // console.log(markerlng)
    // console.log(markerlat)
    const fetchById = async () =>{
        try{
         if(props.showId){
           const {data} = await GetIdMember(props.showId)
           if(data.code === 'OK') {
            setMarkershow(data.results)
           }
         }
        } catch (error){
         HandleAuth(error)
       }
      }

    React.useEffect(() => {
        mapboxgl.accessToken = 'pk.eyJ1IjoidGhpdGl3YXQiLCJhIjoiY2thMHIyNHVhMHYzYzNmbzF0Nzk2dWc0biJ9.XbjkSFDC10BmD-B_HW-OzA';
        const initializeMap = ({setMap, mapContainer}) => {
          const map = new mapboxgl.Map({
            container: mapContainer.current,
            style: "mapbox://styles/mapbox/streets-v11",
            center: [lngs, lats],
            zoom: zoom
          })
        //   markershow.forEach(deta=>{
            // var marker = new mapboxgl.Marker({})
            //   .setLngLat([markershow.lng, markershow.lat])
            //   .addTo(map);
                // })

              map.on('move', () => {
                setMoevs({
                lng: map.getCenter().lng.toFixed(4),
                lat: map.getCenter().lat.toFixed(4),
                zoom: map.getZoom().toFixed(2)
                });
                });
          map.on("load", () => {
            setMap(map);
            map.resize();
          });
        };
        if (!map) initializeMap({setMap, mapContainer});
        fetchById()
      }, [map,props.showId, markershow])
    return(
        <div
        className={classnames('modal fade animated', { 'show fadeInDown': props.modelshow })}
        style={{ display: props.modelshow ? 'block' : 'none', overflowY: 'auto' }}
      >
          <div className="modal-dialog" role="document">
            <div className="modal-content">
            <ModalHeader>พิกัดบ้านลูกค้า</ModalHeader>
            <form >
                <div className="modal-body">
                    <div className="card" style={{height:'600px'}}>
                    <div className='sidebarStyle2'>
                            <div>Longitude: {moves.lng} | Latitude: {moves.lat} | Zoom: {moves.zoom}</div>
                        </div>
                            <div ref={el => mapContainer.current = el} className='mapContainer2' />
                    </div>
                </div>
                <ModalFooter>
                {/* <Button type="submit" className="btn btn-primary">
                  Save
                </Button> */}
                <Button type="button" className="btn btn-light" onClick={props.CloseModelShow}>
                  Cancel
                </Button>
              </ModalFooter>
            </form>
            </div>
          </div>
        </div>
    )
}
export default ShowMaps