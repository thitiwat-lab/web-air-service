import React, {useState} from 'react'
import { Button, ModalHeader, ModalFooter, Form } from 'reactstrap'
import classnames from 'classnames'
import { useForm } from 'react-hook-form'


// internal
import {UdateNewsSchema} from '../../schema/news'
import {HandleAuth} from '../../service/config'
import {UpdateNews, GetIdNews} from '../../service/news'
import {CreateHeaders} from '../../service/config'
import axios from 'axios'


const ModalUpdate = props =>{
    const { handleSubmit, register, errors, clearError, setValue } = useForm({
        validationSchema: UdateNewsSchema
    })
    const [images, setImages] = useState(null)
    const [imgData,setImgData] = useState(null)
    // const [titles, setTitles] = useState(null)
    // const [details, setDetails] = useState(null)
    // const [titles, setTitles] = useState(null)
    const [details, setDetails] = useState('')
    const [test, setTest] = useState('')

    const onChange = (e) =>{
      setDetails(e.target.value)
    }
    const getimage = (event) =>{
        setImages(event.target.files[0])
        if (event.target.files[0]) {
            const reader = new FileReader();
            reader.addEventListener("load", () => {
              setImgData(reader.result);
            })
            reader.readAsDataURL(event.target.files[0]);
          }
        }
        const fetchById = async () => {
            try {
              if (props.newsId) {
                const { data } = await GetIdNews(props.newsId)
                if (data.code === 'OK') {
                  setTest(data.results.detail)
                    setValue('detail', data.results.detail)
                    setValue('name', data.results.name)
                } else {
                  props.messErr()
                }
              }
            } catch (error) {
              HandleAuth(error)
            }
          }
        // close modal
        const Close = () => {
            clearError()
            setValue('detail', '')
            setValue('name', '')
            props.Closeupdate()
          }
          const onSubmit = async () =>{
            try{
              const df = new FormData()
              df.append('filedname',images)
              df.set('detail',details || test)
              await axios({
                url:'http://localhost:3001/news/' + props.newsId,
                method:'put',
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
              Close()
             })
            }catch (error) {
        HandleAuth(error)
      }
    }

      React.useEffect(()=>{
        fetchById()
      }, [props.newsId])

    return(
        <div 
        className={classnames('modal fade animated', { 'show fadeInDown': props.modalupdate })}
        style={{ display: props.modalupdate ? 'block' : 'none', overflowY: 'auto' }}
        >
             <div className="modal-dialog modal-box-shadown" role="document">
                <div className="modal-content">
                  <Form onSubmit={handleSubmit(onSubmit)}>
                    <ModalHeader>แก้ไขรายละเอียดการให้บริการ</ModalHeader>
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
                      <Button type="button" className="btn btn-light" onClick={Close}>
                        ยกเลิก
                      </Button>
                    </ModalFooter>
                  </Form>
                </div>
              </div>
        </div>
    )
}
export default ModalUpdate