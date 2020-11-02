import React, {useState} from 'react'
import { useForm } from 'react-hook-form'
import { Button, ModalHeader, ModalFooter, Form } from 'reactstrap'
import classnames from 'classnames'
import axios from 'axios'

// internal
import {HandleAuth} from '../../service/config'
import {CreateBanner} from '../../service/banner'
import {CreateSchema} from '../../schema/banner'
import {CreateHeaders} from '../../service/config'
const Modal = props => {
    const { handleSubmit, register, errors, clearError, setValue } = useForm({
        validationSchema: CreateSchema
    })
    const [files, setFiles] = useState(null);
    const [file, setFile] = useState(null);

    const Close =()=>{
      setValue('name','')
      clearError()
      props.CloseModal()
    }
    const getimage = (event) =>{
      setFile(event.target.files[0])
      let file_reader = new FileReader();
      let file = event.target.files[0];
      file_reader.onload = () => {
        setFiles(file_reader.result )
      }
      file_reader.readAsDataURL(file)
    }
        const onSubmit = async () =>{
          try{
            const df = new FormData()
           df.append('filedname',file)
            await axios({
            url:'http://localhost:3001/banner/upload',
             method:"post",
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
        props.getbanner()
        Close()
       })
          }catch(error){
            HandleAuth(error)
          }
        }
        React.useEffect(() =>{

        },[file])

    return(
        <div 
        className={classnames('modal fade animated', { 'show fadeInDown': props.modal })}
        style={{ display: props.modal ? 'block' : 'none', overflowY: 'auto' }}
        >
             <div className="modal-dialog modal-box-shadown" role="document">
                <div className="modal-content">
                  <Form onSubmit={handleSubmit(onSubmit)} >
                    <ModalHeader>เพิ่มแบนเนอร์ข่าวประชาสัมพันธ์</ModalHeader>
                    <div className="modal-body">
                          <div className="row">
                            <div className="col-md-12">
                                <label htmlFor="name" className="mr-sm-2 mt-2">รูปภาพ</label>
                                    <div className="row">
                                        <div className="choose_file choose_file-color ml-4">
                                          <div className="mt-1 ml-4">
                                            <i className="fas fa-upload"></i>
                                             <input  accept="/jpeg, /pdf, /jpg" type="file" value={''} name="name" id="name" ref={register} onChange={getimage} /> เลือกภาพประกอบ
                                          </div>
                                        </div>
                                    </div>
                                <div className="mt-2 text-center">
                                    <img src={files} alt="" className="border mt-1" style={{width:'450px', height:'270px'}}/>
                                </div>
                            {/* <div className="invalid-feedback">{errors.lastname && errors.lastname.message}</div> */}
                            </div>
                        </div>
                      </div>
                    <ModalFooter>
                      <Button type="submit" className="btn btn-primary">
                        ยืนยัน
                      </Button>
                      <Button type="button" className="btn btn-light" onClick={props.CloseModal} >
                        ยกเลิก
                      </Button>
                    </ModalFooter>
                  </Form>
                </div>
              </div>
        </div>
    )
}
export default Modal