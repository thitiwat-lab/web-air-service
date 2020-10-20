import React,{useState} from 'react'
import { useForm } from 'react-hook-form'
import PortalTemplate from '../../../component/layouts/template'
import classnames from 'classnames'
import Router from 'next/router'

import {GetIDuser} from '../../../service/auth'
import {HandleAuth} from '../../../service/config'
import {Updatepassword, updateprofile, Getuser} from '../../../service/users'
import {SchemaUpdate} from '../../../schema/user'
import {Userspassword} from '../../../schema/updatepassword'
export default ()=>{
    const { handleSubmit, register, errors, setValue, clearError } = useForm({
        validationSchema: SchemaUpdate,
      })
      const [iddata, setIddata] = useState({})
      const [userid, setUserid] =useState({})
      const [Users, setUsers] = useState([])

      // console.log(userid)
      // console.log(iddata)
      const CreateHeaders = (headers = {}, options = {}) => {
        const opts = {
          headers: {}
        }
        if (options.json) {
          opts.headers['Content-Type'] = 'application/json'
        }
      
        opts.headers = {
          ...opts.headers,
          ...headers
        }
        if (options.auth) {
          opts.headers['Authorization'] = 'Bearer ' + localStorage.auth
        }
        setIddata(localStorage.auth1)
        return opts
      }
// get id login
      const getall = async ()=>{
          try{
            const {data} = await GetIDuser({tel:iddata})
            if(data.code === 'OK'){
                setValue('firstname', data.result[0].firstname)
                setValue('lastname', data.result[0].lastname)
                setValue('address', data.result[0].address)
                setValue('tel', data.result[0].tel)
                setUserid(data.result[0]._id)
            }
          } catch (error) {
            HandleAuth(error)
          }
      }
      const GetData = async () =>{
        try{
          const {data} = await Getuser()
          if(data.code === 'OK'){
            setUsers(data.results)
          }
        }catch(error){
          HandleAuth(error)
        }
      }

      const onsub = handleSubmit(async (value)=>{
        if(userid){
            try{
                const {data} = await updateprofile(userid, value)
                if(data.code === 'OK'){
                    GetData()
                    clearError()
                    Router.push('/portal/member')
                }
            }catch (error) {
            console.log(error)
            HandleAuth(error)
          }

        }
      })
    //  update password
    const onSumit = handleSubmit(async (value)=>{
        try{console.log(value)
        if(userid){
                const {data} = await Updatepassword(userid, value)
                if(data.code === 'OK'){
                    console.log(11111)
                    clearError()
                }
            }
        }catch (error) {
            console.log(error)
            HandleAuth(error)
          }
    })
      React.useEffect(() =>{
        CreateHeaders()
        getall()
      },[userid, iddata])

    return(
        <PortalTemplate>
            <div>
                <div className="card cards">
                    <div className="cars-body hie">
                        <form onSubmit={onsub} >
                            <div className="card-body border mgprofile mt-5">
                                <header>
                                    <p className="text-center" style={{fontSize:"26px"}}>แก้ไขบัญชี</p>
                                </header>
                                <div className="row">
                                    <div className="col-md-6 mt-2">
                                        <label htmlFor="Firstname" className="mr-sm-2">
                                            ชื่อ
                                        </label>
                                        <input
                                            type="text"
                                            className={classnames('Selectd form-control', { 'is-invalid': !!errors.firstname })}
                                            name="firstname"
                                            id="Firstname"
                                            ref={register}
                                        />
                                        <div className="invalid-feedback">{errors.firstname && errors.firstname.message}</div>
                                        </div>
                                        <div className="col-md-6">
                                        <label htmlFor="Lastname" className="mr-sm-2 mt-2">
                                            นามสกุล
                                        </label>
                                        <input
                                            type="text"
                                            className={classnames('Selectd form-control', { 'is-invalid': !!errors.lastname })}
                                            name="lastname"
                                            id="Lastname"
                                            ref={register}
                                        />
                                        <div className="invalid-feedback">{errors.lastname && errors.lastname.message}</div>
                                        </div>
                                        <div className="col-md-12">
                                        <label htmlFor="Address" className="mr-sm-2 mt-2">
                                            ที่อยู่
                                        </label>
                                        <input
                                            type="text"
                                            className={classnames('Selectd form-control', { 'is-invalid': !!errors.address })}
                                            name="address"
                                            id="Address"
                                            ref={register}
                                        />
                                        <div className="invalid-feedback">{errors.address && errors.address.message}</div>
                                        </div>
                                        <div className="col-md-12">
                                        <label htmlFor="Tel" className="mr-sm-2 mt-2">
                                            เบอร์โทรศัพท์
                                        </label>
                                        <input
                                            type="text"
                                            className={classnames('Selectd form-control', { 'is-invalid': !!errors.tel })}
                                            name="tel"
                                            id="Tel"
                                            ref={register}
                                        />
                                        <div className="invalid-feedback">{errors.tel && errors.tel.message}</div>
                                    </div>
                                </div>
                                <div className="mt-4 ">
                                    <div className="row">
                                        <div className="col-4"></div>
                                            <div className="col-4">
                                                <button type="submit" className="btn btn-success btn-sm btn-block">
                                                    ยืนยัน
                                                </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </PortalTemplate>
    )
}