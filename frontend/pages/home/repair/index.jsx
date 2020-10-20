import React from 'react'
import Homeplate from '../../../component/layouts/homeplate'

export default () => {
    return (
        <Homeplate>
             <div className="container-fluid"style={{backgroundColor:'#ffffff'}}>
                <div className="container">
                    <div className="row">
                        <h2 className="ml-4 mt-5">บริการซ่อมแอร์</h2>
                    </div>
                    <hr className="mt-0"/>
                    <div className="row">
                        <div className="col-md table-responsive">
                            <table className="table table-bordered text-center mt-4">
                                <thead>
                                    <tr>
                                    <th colspan="5">ตารางราคาค่าบริการ</th>
                                    </tr>
                                    <tr>
                                    <th scope="col">ขนาดบีทียู (BTU)</th>
                                    <th colspan="2">ซ่อมรั่ว</th>
                                    <th colspan="2">ตัดมาซ่อมรั่ว</th>
                                    </tr>
                                    <tr>
                                    <th scope="col"></th>
                                    <th scope="col">ราคา</th>
                                    <th scope="col">เวลา</th>
                                    <th scope="col">ราคา</th>
                                    <th scope="col">เวลา</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                    <th scope="row">9,000 - 21,000</th>
                                    <td>1,500.-</td>
                                    <td>2 ช.ม.</td>
                                    <td>2,200</td>
                                    <td>4 ช.ม.</td>
                                    </tr>
                                    <tr>
                                    <th scope="row">23,000 - 28,000</th>
                                    <td>1,900.-</td>
                                    <td>2 ช.ม.</td>
                                    <td>2,500</td>
                                    <td>4 ช.ม.</td>
                                    </tr>
                                    <tr>
                                    <th scope="row">29,000 - 38,000</th>
                                    <td>2,500.-</td>
                                    <td>2 ช.ม.</td>
                                    <td>2,500</td>
                                    <td>4 ช.ม.</td>
                                    </tr>
                                    <tr>
                                    <th scope="row">รายการซ่อมทั่วไป</th>
                                    <th colspan="2">ราตา</th>
                                    <th colspan="2">เวลา</th>
                                    </tr>
                                    <tr>
                                    <td scope="row">เปลี่ยนเซ็นเซอร์</td>
                                    <td colspan="2">200</td>
                                    <td colspan="2">30 นาที</td>
                                    </tr>
                                    <tr>
                                    <td scope="row">เปลียนแค็ป</td>
                                    <td colspan="2">300</td>
                                    <td colspan="2">30 นาที</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div className="row mt-3">
                        <div className="col">
                            <h3>ซ่อมแอร์ระบบรั่ว คือ</h3>
                            <hr/>
                            <div className="col-md-8">
                                <p>- แอร์ที่เปิดมาแล้วเครื่องทำงานปกติทั้งตัวคอย์ลเย็นและคอย์ลร้อน แต่ไม่มีความเย็นออกมาจากด้านในห้อง เป็นลมเหมือนพัดลมธรรมดา แสดงว่าอาจมีการรั่วของระบบน้ำยา จากที่ใดที่หนึ่ง ซึ่งต้องตรวจเช็คหา จุดรั่วซึมให้พบและทำการเชื่อมปิดรอยรั่ว และแว๊กคัมระบบเพื่อไล่อากาศ จากนั้นก็ เติมน้ำยาแอร์ใหม่ครับ</p>
                            </div>
                        </div>
                    </div>
                    <div className="row mt-4">
                    <div className="col">
                            <h3>รายละเอียดการทำงาน</h3>
                            <hr/>
                            <div className="col-md-6">
                                <p>1. ตรวจเช็คหารอยรั่วซึมตามจุดต่าง ๆ</p>
                                <p>2. แจ้งให้ลูกค้าทราบถึงจุดรั่วที่พบอย่างเด่นชัด</p>
                                <p>3. ทำการเชื่อมอุดรูรั่วตามจุดที่แจ้งลูกค้า</p>
                                <p>4. ทำการแว๊กคัมระบบทางเดินน้ำยาใหม่เพื่อไล่อากาศ</p>
                                <p>5. ตรวจเช็ครอยรั่วที่เชื่อมว่าไม่มีรอยรั่วอีก</p>
                                <p>6. เติมน้ำยาแอร์ให้เต็มระบบและทดสอบระบบแอร์</p> 
                            </div>
                        </div>
                    </div>
                </div>
         </div>
         <div className="container-fluid text-center mt-1" style={{height:'60px', backgroundColor:'#99CCFF'}}>
            <marquee style={{fontSize:'24px', color:'#ffffff'}} className="mt-2" direction="left" width="40%" scrollamount="8">“ ศูนย์บริการ ล้างแอร์ ซ่อมแอร์ ติดตั้งแอร์ (ล้างแอร์เริ่มต้นที่ 500 บาท) ”</marquee>
          </div>
    </Homeplate>
    )
    }