import React, {useState, useRef} from 'react'
import ReactDOM from 'react-dom';
import mapboxgl from 'mapbox-gl';

import {GetMember} from '../../../service/member'
import {GetMaps} from '../../../service/maps'
// internal
import PortalTemplate from '../../../component/layouts/template'
// mapboxgl.accessToken = '';
export default () => {
    const [map, setMap] = useState(null);
    const mapContainer = useRef(null);
    const lngs = 100.4930244
    const lats = 13.7248936
    const zoom = '8'
    const [moves, setMoevs] =useState({})
// GET Data
    const [member, setMember] = useState([])
    const getmember = async () =>{
        const {data} = await GetMaps()
        if(data.code === 'OK'){
            setMember(data.results)
        }
    }
    React.useEffect(() => {
      mapboxgl.accessToken = 'pk.eyJ1IjoidGhpdGl3YXQiLCJhIjoiY2thMHIyNHVhMHYzYzNmbzF0Nzk2dWc0biJ9.XbjkSFDC10BmD-B_HW-OzA';
      const initializeMap = ({ setMap, mapContainer }) => {
        const map = new mapboxgl.Map({
          container: mapContainer.current,
          style: "mapbox://styles/mapbox/streets-v11",
          center: [lngs, lats],
          zoom: zoom
        })

        member.forEach(deta=>{
          // var popup = new mapboxgl.Popup({ offset: 25 }).setText(
          //   'ชื่อ: '+ deta.firstname +'           '+'นามสกุล: '+ deta.lastname+'   '+'   '
          //   +'ที่อยู่: '+ deta.address+'  '+ ' เบอร์โทรศัพท์: ' + deta.tel
          //   );
          var popup = new mapboxgl.Popup({ offset: 25 }).setHTML(
          "<h6>"+'ชื่อ: '+ deta.firstname +"</h6>"+"<h6>"+'นามสกุล: '+ deta.lastname +"</h6>"+
          "<h6>"+'ที่อยู่: '+ deta.address +"</h6>"+"<h6>"+'เบอร์โทรศัพท์: '+ deta.tel +"</h6>"
    
            );
          var marker = new mapboxgl.Marker({})
          .setLngLat([deta.lng, deta.lat])
          .setPopup(popup)
          .addTo(map);
        })
        
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
      if (!map) initializeMap({ setMap, mapContainer });
      getmember()
    }, [map,member]);
         return (
        <PortalTemplate>
                <div>
                        <div className='sidebarStyle'>
                            <div>Longitude: {moves.lng} | Latitude: {moves.lat} | Zoom: {moves.zoom}</div>
                        </div>
                            <div ref={el => mapContainer.current = el} className='mapContainer' />
                </div>
        </PortalTemplate>
            )
        }
     
