import React, {useState} from 'react'
import { Button, ModalHeader, ModalFooter, Form } from 'reactstrap'
import classnames from 'classnames'
import { useForm } from 'react-hook-form'
import axios from 'axios'

// internal
import {NewsSchema} from '../../schema/news'
import {HandleAuth} from '../../service/config'
import {CreateNews} from '../../service/news'
import {CreateHeaders} from '../../service/config'


const ModalCreate = props =>{
    const { handleSubmit, register, errors, clearError, setValue } = useForm({
        validationSchema: NewsSchema
    })
    const [images, setImages] = useState(null)
    const [imgData,setImgData] = useState(null)
    const [titles, setTitles] = useState(null)
    const [details, setDetails] = useState(null)
    
    const onchangetitle = (e) =>{
      setTitles(e.target.value)
    }
    const onChange = (e) =>{
      setDetails(e.target.value)
    }

    const getimage = (event) =>{
      setImages(event.target.files[0])
      let file_reader = new FileReader();
      let file = event.target.files[0];
      file_reader.onload = () => {
        setImgData(file_reader.result )
      }
      file_reader.readAsDataURL(file)
    }
    

    const Closemodel = () =>{
        clearError()
        setValue('detail', '')
        setValue('name', '')
        props.CloseModal()
    }
    const setVal = () =>{
        setValue('detail', '')
        setValue('name', '')
        props.CloseModal()
    }

    const onSubmit = async () =>{
        try{
          const df = new FormData()
          df.append('filedname',images)
          await axios({
            // url:'http://128.199.127.236:3001/api/news/upload',
            url:'http://localhost:3001/news/upload',
            method:'post',
            headers: {
              'Content-Type': 'multipart/form-data',
          },
          data:df,
          ...CreateHeaders({}, {
            json: true,
            auth: true 
          })
        })
        .then(res=>{
          props.getnews()
          clearError()
          setVal()
         })
        }catch (error) {
    HandleAuth(error)
  }
}
React.useEffect(()=>{
  // getimage()
    }, [imgData, titles, details])

    return(
        <div 
        className={classnames('modal fade animated', { 'show fadeInDown': props.modal })}
        style={{ display: props.modal ? 'block' : 'none', overflowY: 'auto' }}
        >
             <div className="modal-dialog modal-box-shadown" role="document">
                <div className="modal-content">
                  <Form onSubmit={onSubmit}>
                    <ModalHeader>เพิ่มข่าวประชาสัมพันธ์</ModalHeader>
                    <div className="modal-body">
                          <div className="row">
                            <div className="col-md-12">
                                <label htmlFor="name" className="mr-sm-2 mt-2">รูปภาพ</label>
                                    <div className="row">
                                        <div className="choose_file choose_file-color ml-4">
                                          <div className="mt-1 ml-4">
                                            <i className="fas fa-upload"></i>
                                             <input accept="/jpeg, /pdf, /jpg" type="file" name="name" id="name" value={''} ref={register} onChange={getimage} /> เลือกภาพประกอบ
                                          </div>
                                        </div>
                                    </div>
                                <div className="mt-2 text-center">
                                    <img src={imgData} alt="" className="border mt-1" style={{width:'450px', height:'270px'}} ref={register}/>
                                </div>
                            {/* <div className="invalid-feedback">{errors.lastname && errors.lastname.message}</div> */}
                            </div>
                            {/* <div className="col-md-12">
                              <label htmlFor="Detail" className="mr-sm-2 mt-2">
                                รายละเอียด
                              </label>
                              <textarea
                                type="text"
                                className={classnames('Selectd form-control',{ 'is-invalid': !!errors.Detail })}
                                name="detail"
                                id="detail"
                                rows="5" 
                                cols="15"
                                onChange={onChange}
                                ref={register}
                              />
                              <div className="invalid-feedback">{errors.Detail && errors.Detail.message}</div>
                            </div> */}
                        </div>
                      </div>
                    <ModalFooter>
                      <Button type="submit" className="btn btn-primary">
                        ยืนยัน
                      </Button>
                      <Button type="button" className="btn btn-light" onClick={Closemodel} >
                        ยกเลิก
                      </Button>
                    </ModalFooter>
                  </Form>
                </div>
              </div>
        </div>
    )
}
export default ModalCreate