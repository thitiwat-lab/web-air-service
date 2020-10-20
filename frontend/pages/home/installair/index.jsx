import React from 'react'
import Homeplate from '../../../component/layouts/homeplate'

export default () => {
  return (
      <Homeplate>
           <div className="container-fluid" style={{backgroundColor:'#ffffff'}}>
                <div className="container">
                    <div className="row">
                        <h2 className="ml-4 mt-5">บริการติดตั้งแอร์</h2>
                    </div>
                    <hr className="mt-0"/>
                    <div className="row">
                        <div className="col-md table-responsive">
                            <table className="table table-bordered text-center mt-4">
                                <thead>
                                <tr>
                                    <th colspan="4">ตารางราคาค่าบริการติดตั้งแอร์ (ใหม่-เก่า)</th>
                                    </tr>
                                    <tr>
                                    <th scope="col">ขนาดบีทียู (BTU)</th>
                                    <th scope="col">แอร์ใหม่ ราคา (บาท)</th>
                                    <th scope="col">แอร์เก่าราคา (บาท)</th>
                                    <th scope="col">เวลาประมาณ(ช.ม.)</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                    <th scope="row">9,000 - 21,000</th>
                                    <td>2,500.-</td>
                                    <td>2,700.-</td>
                                    <td>4</td>
                                    </tr>
                                    <tr>
                                    <th scope="row">24,000 - 28,000</th>
                                    <td>3,000.-</td>
                                    <td>3,200.-</td>
                                    <td>4</td>
                                    </tr>
                                    <tr>
                                    <th scope="row">29,000 - 38,000</th>
                                    <td>3,500.-</td>
                                    <td>3,700.-</td>
                                    <td>4</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div className="row mt-3">
                         <div className="col">
                            <h3>รายละเอียด</h3>
                            <hr/>
                                <div className="col-md-8">
                                    <p>1. รายการเพิ่มเติมที่ต้องมีค่าใช้จ่ายเพิ่ม</p>
                                    <p>2. เมื่อต้องการขนส่งหรือติดตั้งต่างสถานที่ เพิ่ม ค่าขนส่ง 300 บาท</p>
                                    <p>3. เมื่อต้องการล้างทำความสะอาดก่อนการติดตั้ง เพิ่ม 200 บาท</p>
                                    <p>4. กรณีต้องการขาแขวนคอยล์ร้อนคอยล์เย็นJZK - QM เพิ่ม 400 บาท</p>
                                    <p>5. ระยะเวลาในการทำงานขึ้นอยู่กับระยะทางในการย้ายแอร์ไปติดตั้งใหม่</p> 
                                    <p>6. ฟรีอุปกรณ์กรองความชื้น (ดรายเออร์ - CH)</p>
                                    <p>7. ฟรี แวคคั่ม-เติมนํ้ายาเต็มระบบ</p>
                                    <p>8. ตรวจสอบและทดลองเดินระบบการใช้งานจริง</p>
                                </div>
                            </div>
                        </div>
                        <div className="row mt-2">
                        <div className="col">
                            <p>หมายเหตุ</p>
                            <hr/>
                                <div className="col-md-8">
                                    <p>1. ระยะเวลาการย้ายและติดตั้งเป็นเวลาโดยประมาณ ขึ้นอยู่ที่สถานที่ในการติดตั้ง</p>
                                    <p>2. การย้ายและติดตั้งเป็นแบบปกติทั่วไป ตามอุปกรณ์มาตรฐาน</p>
                                    <p>3. ราคาดังกล่าวอาจมีการเปลี่ยนแปลงขึ้นอยู่กับสภาวะปัจจุบัน</p>
                                    <p>4. ราคาดังกล่าวเป็นราคาเฉพาะกรุงเทพฯ-ปริมนฑลเท่านั้น</p>
                                    <p>5. รับประกันงานเฉพาะกรณีที่เกิดจากการติดตั้ง</p>
                                </div>
                            </div>
                        </div><hr/>
                            <div className="row">
                            <div className="col-md table-responsive">
                                <table className="table table-bordered text-center mt-4">
                                    <thead>
                                    <tr>
                                        <th colspan="4">ตารางราคาค่าบริการ (ย้ายแอร์เก่าทั้งชุด)</th>
                                        </tr>
                                        <tr>
                                        <th scope="col">ขนาดบีทียู (BTU)</th>
                                        <th scope="col">ราคา (บาท)</th>
                                        <th scope="col">เวลาประมาณ(ช.ม.)</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                        <th scope="row">9,000 - 21,000</th>
                                        <td>3,000.-</td>
                                        <td>4</td>
                                        </tr>
                                        <tr>
                                        <th scope="row">24,000 - 28,000</th>
                                        <td>3,600.-</td>
                                        <td>4</td>
                                        </tr>
                                        <tr>
                                        <th scope="row">29,000 - 38,000</th>
                                        <td>4,200.-</td>
                                        <td>4</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div className="row mt-3">
                         <div className="col">
                            <h3>รายละเอียด</h3>
                            <hr/>
                                <div className="col-md-8">
                                    <p>1. รายการเพิ่มเติมที่ต้องมีค่าใช้จ่ายเพิ่ม</p>
                                    <p>2. เมื่อต้องการขนส่งหรือติดตั้งต่างสถานที่ เพิ่ม ค่าขนส่ง 300 บาท</p>
                                    <p>3. เมื่อต้องการล้างทำความสะอาดก่อนการติดตั้ง เพิ่ม 200 บาท</p>
                                    <p>4. กรณีต้องการขาแขวนคอยล์ร้อนคอยล์เย็นJZK - QM เพิ่ม 400 บาท</p>
                                    <p>5. ระยะเวลาในการทำงานขึ้นอยู่กับระยะทางในการย้ายแอร์ไปติดตั้งใหม่</p> 
                                    <p>6. ฟรีอุปกรณ์กรองความชื้น (ดรายเออร์ - CH)</p>
                                    <p>7. ฟรี แวคคั่ม-เติมนํ้ายาเต็มระบบ</p>
                                    <p>8. ตรวจสอบและทดลองเดินระบบการใช้งานจริง</p>
                                </div>
                            </div>
                        </div>
                        <div className="row mt-2">
                        <div className="col">
                            <p>หมายเหตุ</p>
                            <hr/>
                                <div className="col-md-8">
                                    <p>1. ระยะเวลาการย้ายและติดตั้งเป็นเวลาโดยประมาณ ขึ้นอยู่ที่สถานที่ในการติดตั้ง</p>
                                    <p>2. การย้ายและติดตั้งเป็นแบบปกติทั่วไป ตามอุปกรณ์มาตรฐาน</p>
                                    <p>3. ราคาดังกล่าวอาจมีการเปลี่ยนแปลงขึ้นอยู่กับสภาวะปัจจุบัน</p>
                                    <p>4. ราคาดังกล่าวเป็นราคาเฉพาะกรุงเทพฯ-ปริมนฑลเท่านั้น</p>
                                    <p>5. รับประกันงานเฉพาะกรณีที่เกิดจากการติดตั้ง</p>
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