import React, {useState} from 'react'
import Frontend from '../component/layouts/homeplate'
import {GetNews} from '../service/news'
import ModalImg from '../component/home/modalimg'
export default () =>{
    const [metadata, setMetadata] = useState([])
  const [modal, setModal] = useState(false)
  const [idimg, setIdimg] = useState('')

    const getnews =async () =>{
        const { data } =await GetNews()
        if(data.code === 'OK'){
          setMetadata(data.results)
          }
        }
        const modalimg =()=>{
            setModal(!modal)
        }
        const CloseModal = () => {
            setModal(false)
          }

          const imgID =(id)=>{
            setIdimg(id)
            modalimg()
          }

    React.useEffect(()=>{
      getnews()
    },[])

    return(
        <Frontend>
            <ModalImg modal={modal} CloseModal={CloseModal} idimg={idimg} />
            <div style={{backgroundColor:"#ffffff"}}>
                <div>
                    <img src="bgair01.png" className="head-img" alt="head"/>
                    <span className="row "><p className="h text-head">VC</p><p className="p2">Air service</p></span>
                </div>
                <div className="topic-body">
                   <p className="h-h3 p1">Images</p>
                   <hr className="hr-page"/>
                </div>
                <div className="flex-box">
                {metadata.map((v,i)=>{
                    return(
                              <img key={i + 'imges'} src={"http://localhost:3001/news/imgpath/" + v.name} className="body-img" alt="" onClick={imgID.bind(this, v._id)} />
                              // <img key={i + 'imges'} src={"http://128.199.127.236:3001/api/news/imgpath/" + v.name} className="body-img" onClick={imgID.bind(this, v._id)} alt=""/>
                              )
                })}
                </div>
                <div className="container-fluid text-center" style={{height:'60px', backgroundColor:'#99CCFF'}}>
          <marquee style={{fontSize:'24px', color:'#ffffff'}} className="mt-2" direction="left" width="40%" scrollamount="8">“ ศูนย์บริการ ล้างแอร์ ซ่อมแอร์ ติดตั้งแอร์ (ล้างแอร์เริ่มต้นที่ 500 บาท) ”</marquee>
          </div>
            </div>
        </Frontend>
    )
}