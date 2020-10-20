import React , { useState } from 'react'
import { useForm } from 'react-hook-form'
import classnames from 'classnames'
import Router from 'next/router'

// internal
import AuthLayout from '../../../component/layouts/auth'
import {LoginService} from '../../../service/auth'
import {LoginSchema} from '../../../schema/login'

const LoginPage = () => {
    const [errorMsg, setErrorMsg] = useState(false)
    const [successMsg, setSuccessMsg] = useState(false)
    const [errorstatus, setErrorstatus]=useState(false)
    // const [passwordShown, setPasswordShown] = useState(false);
    
    const { handleSubmit, register, errors, setValue } = useForm({
      validationSchema: LoginSchema
    })
// show password
    // const togglePasswordVisiblity = () => {
    //   setPasswordShown(passwordShown ? false : true);
    // };

    const SubmitLogin = handleSubmit(async value => {
        const { data } = await LoginService(value.email, value.password) 
        if (data.code === 'OK') {
          localStorage.auth = data.token.userrights
          localStorage.auth0 = data.token.status
          localStorage.auth1 = data.token.tel
          setTimeout(() => {
            if(data.token.status === 'ใช้งาน'){
              setSuccessMsg(true)
              if(data.token.userrights === "admin"){
                Router.push('/admin')
              }else if(data.token.userrights === "officer"){
                Router.push('/portal/reservation')
              }else if(data.token.userrights === "staff"){
                Router.push('/cleaningstaff/reportreservation')
              }
            }else{
              Router.push('/portal/auth/login')
              setErrorstatus(true)
            }
          }, 120)
        } else {
          // setValue('password', '')
          setErrorMsg(true)
        }
      })
      React.useEffect(() => {
        if(localStorage.auth0 === 'ใช้งาน'){
          if(localStorage.auth === 'admin' ) {
            Router.push('/admin')
          }
          if(localStorage.auth === 'branchstaff'){
            Router.push('/portal')
          }
          if(localStorage.auth === 'cleaningstaff'){
            Router.push('/cleaningstaff/reportreservation')
          }
        }
        // else{
        //   Router.push('/portal/auth/login')
        // }
      }, [])
    return(
  <AuthLayout>
    <div className="row">
          <div className="card shadow bg-white margin-login">
            <div className="card-header border-bottom bg-white ">
              <div className="text-center">
                <h3>บริษัทวีซีแอร์เซอร์วิส</h3>
              </div>
            </div>
            <div className="col mt-2">
              <form onSubmit={SubmitLogin}>
                {/* {errorMsg && <div className="alert alert-danger">อีเมล หรือ รหัสผ่านไม่ถูกต้อง</div>} */}

                {successMsg && <div className="alert alert-success">เข้าระบบสำเร็จ</div>}
                {errorstatus &&  <div className="alert alert-danger">ไม่มีผู้ใช้งาน</div>}
                <div className="input-group input-group-md mt-2">
                  <div className="row">
                    <label htmlFor="exampleInputEmail1">อีเมล</label>
                  </div>
                  <div class="input-group-prepend">
                        <span class="input-group-text"><i className="fas fa-user"></i></span>
                  </div>
                  <input
                    type="text"
                    name="email"
                    placeholder="กรุณากรอกอีเมล"
                    className={classnames('form-control form-control-md', { 'is-invalid': !!errors.email })}
                    id="exampleInputEmail1"
                    ref={register}
                  />
                <div className="invalid-feedback">{errors.email && errors.email.message}</div>
              </div>
                <div className="input-group input-group-md mt-3">
                  <div className="row">
                      <label htmlFor="exampleInputPassword1">รหัสผ่าน</label>        
                  </div>
                   <div class="input-group-prepend">
                        <span class="input-group-text"><i className="fas fa-lock"></i></span>
                  </div>
                  <input
                    placeholder="กรุณากรอกรหัสผ่าน"
                    // type={passwordShown ? "text" : "password"}
                    type="password"
                    name="password"
                    id="exampleInputPassword1"
                    className={classnames('form-control form-control-md', { 'is-invalid': !!errors.password})}
                    ref={register}
                  />
                  {/* <i class="fas fa-eye" onClick={togglePasswordVisiblity}></i> */}
                <div className="invalid-feedback">{errors.password && errors.password.message}</div>
                
              </div>
                <div className="card-footer bg-white text-center  mt-4">
                  <button type="submit" className="btn btn-success btn-mb btn-block">
                    เข้าสู่ระบบ
                  </button>
                </div>
              </form>
              <div>
            </div>
            </div>
          </div>
      </div>
    </AuthLayout>
    )
}
export default LoginPage