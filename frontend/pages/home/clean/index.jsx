import React from 'react'
import Homeplate from '../../../component/layouts/homeplate'

export default () => {
  return (
      <Homeplate>
           <div className="container-fluid"style={{backgroundColor:'#ffffff'}}>
                <div className="container">
                    <div className="row">
                        <h2 className="ml-4 mt-5">บริการล้างแอร์</h2>
                    </div>
                    <hr className="mt-0"/>
                    <div className="row">
                        <table className="table table-bordered text-center mt-4">
                            <thead>
                                <tr>
                                <th scope="col">ขนาดบีทียู (BTU)</th>
                                <th scope="col">ติดผนังราคา (บาท)</th>
                                <th scope="col">เวลาประมาณ(ช.ม.)</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                <th scope="row">9,000 - 21,000</th>
                                <td>500.-</td>
                                <td>1</td>
                                </tr>
                                <tr>
                                <th scope="row">24,000 - 35,000</th>
                                <td>600.-</td>
                                <td>1.5</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="row mt-4">
                        <div className="col">
                            <h3>รายละเอียดการทำงาน</h3>
                            <p>- บริการล้างแอร์ คอยล์เย็น</p><hr/>
                            <div className="col-md-6">
                                <p>1. ล้างทำความสะอาดโบเวอร์ ด้วยปั้มน้ำแรงดันสูง</p>
                                <p>2. ล้างทำความสะอาดฟิลคอยล์ (EVAPERRATOR) ด้วยปั้มน้ำแรงดันสูง</p>
                                <p>3. ดูดและเป่าทำความสะอาดระบบท่อน้ำทิ้งด้วย (BLOVER)</p>
                                <p>4. ล้างทำความสะอาดแผ่นกรองอากาศ (FILTER)</p>
                                <p>5. ตรวจเช็คจุดต่อสายไฟภายในระบบ และยึดสกรูสายไฟให้แน่นหนา</p>
                                <p>6. ตรวจเช็ครอบความเร็วของมอเตอร์พัดลม (FANCOLL)</p> 
                                <p>7. ตรวจเช็คสปีดและเทอร์โมรูม</p>
                            </div>
                        </div>
                    </div>
                    <p className="mt-3">- บริการล้างแอร์ คอยล์ร้อน</p><hr/>
                    <div className="row">
                        <div className="col">
                            <div className="col-md-8">
                                <p>1. ล้างทำความสะอาดแผงครีบคอนเดนซึ่งด้วยปั้มน้ำแรงดันสูงและ BLOVER</p>
                                <p>2. ผสมน้ำยาฉีดล้างเครื่องปรับอากาศจะทำ ให้ขาวสะอาด และ มีกลิ่นหอม</p>
                                <p>3. ตรวจเช็คจุดต่อสายไฟภายในระบบ และยึดสกรูสายไฟให้แน่นหนา</p>
                                <p>4. ตรวจวัด แรงดันของระบบน้ำยา เช็คกำลังอัดของคอมเพรสเซอร์</p>
                                <p>5. ตรวจเช็ตการทำงานของไทม์เมอร์ และอุปกรณ์ช่วยสตาร์ททุกชนิด ของระบบคอมเพรสเซอร์</p>
                                <p>6. ตรวจเช็คกระแสไฟฟ้า</p>
                            </div>
                        </div>
                    </div>
                    <div className="row mt-3">
                        <div className="col">
                            <h3>เหตุผลที่แนะนำให้ลูกค้าล้างแอร์</h3><hr/>
                            <div className="col-md-6">
                                <p> 1. ล้างทำความสะอาดโบเวอร์ ด้วยปั้มน้ำแรงดันสูง</p>
                                <p>2. ล้างทำความสะอาดฟิลคอยล์ (EVAPERRATOR) ด้วยปั้มน้ำแรงดันสูง</p>
                                <p>3. ดูดและเป่าทำความสะอาดระบบท่อน้ำทิ้งด้วย (BLOVER)</p>
                                <p>4. ล้างทำความสะอาดแผ่นกรองอากาศ (FILTER)</p>
                                <p>5. ตรวจเช็คจุดต่อสายไฟภายในระบบ และยึดสกรูสายไฟให้แน่นหนา</p>
                                <p>6. ตรวจเช็ครอบความเร็วของมอเตอร์พัดลม (FANCOLL)</p> 
                                <p>7. ตรวจเช็คสปีดและเทอร์โมรูม</p>
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