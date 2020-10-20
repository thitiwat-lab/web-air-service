import React,{useState} from 'react'
import { useForm } from 'react-hook-form'
import classnames from 'classnames'
import Router from 'next/router'

import {Userspassword} from '../../../schema/updatepassword'
import {Updatepassword, updateprofile, Getuser} from '../../../service/users'
import {GetIDuser} from '../../../service/auth'
import {HandleAuth} from '../../../service/config'
import Adminplate from '../../../component/layouts/frontendlayouts'

export default () =>{
    const { handleSubmit, register, errors, setValue, clearError } = useForm({
        validationSchema: Userspassword,
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
      const onSumit = handleSubmit(async (value)=>{
        try{
        if(userid){
                const {data} = await Updatepassword(userid, value)
                if(data.code === 'OK'){
                    clearError()
                    GetData()
                    Router.push('/pageadmin/member')
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
        <Adminplate>
            <div className="card cards">
                    <div className="cars-body hie">
                    <form onSubmit={onSumit} >
                            <div className="card-body border mgprofile mt-5 mb-5">
                                <header>
                                    <p className="text-center" style={{fontSize:"26px"}}>เปลี่ยนรหัสผ่าน</p>
                                </header>
                                <div className="row">
                                    <div className="col-md-12">
                                        <label htmlFor="password" className="mr-sm-2 mt-2">
                                            รหัสผ่าน
                                        </label>
                                        <input
                                            type="password"
                                            className={classnames('Selectd form-control', { 'is-invalid': !!errors.password })}
                                            name="password"
                                            id="password"
                                            ref={register}
                                        />
                                        <div className="invalid-feedback">{errors.password && errors.password.message}</div>
                                        </div>
                                        <div className="col-md-12">
                                        <label htmlFor="passwordConfirm" className="mr-sm-2 mt-2">
                                            ยืนยันรหัสผ่าน
                                        </label>
                                        <input
                                            type="password"
                                            className={classnames('Selectd form-control', { 'is-invalid': !!errors.passwordConfirm })}
                                            name="passwordConfirm"
                                            id="passwordConfirm"
                                            ref={register}
                                        />
                                        <div className="invalid-feedback">{errors.passwordConfirm && errors.passwordConfirm.message}</div>
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
        </Adminplate>
    )
}