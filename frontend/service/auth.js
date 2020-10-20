import axios from 'axios'
import {ENDPOINTS, CreateHeaders} from './config'


export const GetIDuser = (query) =>{
    return axios({
        url:ENDPOINTS.EP_GETDATALOGIN,
        method:'GET',
        params:query,
        ...CreateHeaders({},{
            json: true,
            auth:true
        })
    })
}


export const LoginService = (email, password) =>{

    return axios({
        url:ENDPOINTS.EP_LOGIN,
        method:'POST',
        data:{
            email,
            password
        },
        headers:CreateHeaders({},{
            json: true
        })
    })
}
export const RegisterUser = (firstname, lastname, email, password, passwordConfirm, address, tel) =>{
    return axios({
        url:`${ENDPOINTS.EP_REGISTER}/register`,
        method:'POST',
        data:{
            firstname, 
            lastname, 
            email, 
            password, 
            passwordConfirm, 
            address, 
            tel
        },
        ...CreateHeaders({},{
            json: true
        })
    })  
}
