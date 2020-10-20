import axios from 'axios'
import {ENDPOINTS, CreateHeaders} from './config'

export const RegisterUser = (firstname, lastname, email, password, passwordConfirm, address, tel) =>{
    return axios({
        url:ENDPOINTS.EP_REGISTER,
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
