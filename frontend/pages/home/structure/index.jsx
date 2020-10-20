import React, {useState, useRef}from 'react'
import Homeplate from '../../../component/layouts/homeplate'
import mapboxgl from 'mapbox-gl';

export default () => {
    const [map, setMap] = useState(null);
    const mapContainer = useRef(null);
    const lngs = 100.6514434
    const lats = 13.8220194
    const zoom = '10'

    React.useEffect(()=>{
        mapboxgl.accessToken = 'pk.eyJ1IjoidGhpdGl3YXQiLCJhIjoiY2thMHIyNHVhMHYzYzNmbzF0Nzk2dWc0biJ9.XbjkSFDC10BmD-B_HW-OzA';
      const initializeMap = ({ setMap, mapContainer }) => {
        const map = new mapboxgl.Map({
          container: mapContainer.current,
          style: "mapbox://styles/mapbox/streets-v11",
          center: [lngs, lats],
          zoom: zoom
        })
        var popup = new mapboxgl.Popup({ offset: 25 }).setHTML(
          
          "<h6>"+'<b>ที่ตั้งบริษัท:</b> ตึก6การเคหะนวมินทร์ เลขที่ 817/02 ซ.นวมินทร์139 แขวงนวลจันทร์เขตบึงกุ่ม กรุงเทพมหานคร 10230 '+"</h6>"
            );
          var marker = new mapboxgl.Marker({})
          .setLngLat([lngs, lats])
          .setPopup(popup)
          .addTo(map);
        map.on("load", () => {
          setMap(map);
          map.resize();
        });
      };
      if (!map) initializeMap({ setMap, mapContainer });
    },[map])
  return (
      <Homeplate>
          <script src='https://api.tiles.mapbox.com/mapbox-gl-js/v1.12.0/mapbox-gl.js'></script>
          <link href='https://api.tiles.mapbox.com/mapbox-gl-js/v1.12.0/mapbox-gl.css' rel='stylesheet' />
         <div className="container-fluid addrr-staff">
             <div className="card mt-3 mb-3">
                 <div className="cards-body">
                     <div className="row mt-5">
                       <div className="col-md-1"></div>
                        <div className="col-md-5 text-center map-add-text">
                                <h3>ที่ตั้งบริษัท</h3>
                                <div className="row mt-4">
                                  <div className="col-md-2"></div>
                                    <div className="col-md-8">
                                      <p className="font-sz "> ตึก6การเคหะนวมินทร์ เลขที่ 817/02 ซ.นวมินทร์139 แขวงนวลจันทร์เขตบึงกุ่ม กรุงเทพมหานคร 10230</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-5 mt-5">
                                <div>
                                <div ref={el => mapContainer.current = el} style={{height:'400px'}}/>
                            </div>
                        </div>
                     </div>
                          <div className="row">
                              <div className="col-md-12 text-center mt-5">
                                <h3>ประวัติบริษัท</h3>
                            </div>
                            <div className="row mt-3">
                              <div className="col-md-3"></div>
                              <div className="col-md-6">
                                <p className="font-sz">
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;	&nbsp;	&nbsp;&nbsp;เริ่มต้นจากที่เจ้าของบริษัทได้เข้าไปทำงานที่บริษัทพานาโซนิคมาก่อนเป็นเวลาหลายปี 
                                จึงได้นำประสบการณ์ที่ได้สะสมมาก่อตั้งเป็นบริษัทวีซีแอร์เซอร์วิสในปัจจุบัน บริษัทวีซีแอร์เซอร์วิสก่อตั้งเมื่อ วันที่ 27 กรกฎาคม พ.ศ. 2547 เป็นบริษัทที่รับบริการในการซ่อมล้างและติดตั้ง
                                เครื่องปรับอากาศในจังหวัดกรุงเทพมหานครและจังหวัดใกล้เคียง
                                </p>
                              </div>
                            </div>
                          </div>
                            <div className="row mt-5">
                              <div className="col-md-12 text-center ">
                                <h3>ข้อมูลพนักงานและผู้พัฒนาระบบ</h3>
                              </div>  
                              <div className="row mt-4">
                              <div className="col-md-5"></div>
                              <div className="col-md-2">
                                <div className="card">
                                  <img src="/suchat.png" className="card-img-top img-addrr-staff" alt="..."/>
                                    <div className="card-body">
                                    <p className="card-title">เจ้าของบริษัท</p>
                                    <p className="card-text"> - ชื่อ: นายชูชาติ วงศ์สะอาด</p>
                                    <p className="card-text">การติดต่อ</p>
                                    <p className="card-text"> - เบอร์โทร: 093-795-5535</p>
                                    <p className="card-text">- ไอดีไลน์: 093-795-5535</p>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="row mt-5">
                              <div className="col-md-3"></div>
                              <div className="col-md-2">
                              <div className="card">
                                  <img src="/yy.jpg" className="card-img-top img-addrr-staff" alt="..."/>
                                    <div className="card-body">
                                    <p className="card-title">ตำแหน่ง: หัวหน้าช่าง</p>
                                    <p className="card-text"> - ชื่อ: นายยืน ขันติยะ</p>
                                  </div>
                                </div>
                              </div>
                              <div className="col-md-2">
                              <div className="card">
                                  <img src="/beem.jpg" className="card-img-top img-addrr-staff" alt="..."/>
                                    <div className="card-body">
                                    <p className="card-title">ตำแหน่ง: หัวหน้าช่าง</p>
                                    <p className="card-text"> - ชื่อ: นายเฉลิมพล แสนโน</p>
                                  </div>
                                </div>
                              </div>
                              <div className="col-md-2">
                              <div className="card">
                                  <img src="/sutthipong.jpg" className="card-img-top img-addrr-staff" alt="mos"/>
                                    <div className="card-body">
                                    <p className="card-title">ตำแหน่ง: ช่างทั่วไป</p>
                                    <p className="card-text"> - ชื่อ: นายสุทธพงษ์ สุใจยา </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="row mt-5 mb-5">
                              <div className="col-md-3"></div>
                              <div className="col-md-2">
                              <div className="card">
                                  <img src="/thitiwat.jpg" className="card-img-top img-addrr-staff" alt="thitiwat"/>
                                    <div className="card-body">
                                      <p className="card-title">ผู้พัฒนาระบบ</p>
                                      <p className="card-text"> - ชื่อ: นายฐิติวัฒน์ เป็นดี</p>
                                      <p className="card-text">การติดต่อ</p>
                                      <p className="card-text"> - เบอร์โทร: 0930107147</p>
                                      <p className="card-text"> - อีเมล: u59042970124@uru.ac.th</p>
                                  </div>
                                </div>
                              </div>
                            </div>
                      </div>
                 </div>
             </div>
         </div>
      </Homeplate>

  )
  }