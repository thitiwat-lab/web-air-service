import axios from 'axios'
import {ENDPOINTS, CreateHeaders} from './config'


   export const Getuser =(query)=>{
       return axios({
           url:ENDPOINTS.EP_USER,
           method:'GET',
           params:query,
           ...CreateHeaders({},{
            json: true,
            auth: true
           })
       })
   }
   export const GetUseronce = (query) =>{
    return axios({
        url:`${ENDPOINTS.EP_USER}/searchone`,
        method:'GET',
        params:query,
        ...CreateHeaders({},{
           json: true,
           auth: true
        })
    })
}

   export const Createuser = (firstname, lastname, email, password, passwordConfirm, address, tel, userrights) =>{
    return axios({
        url:ENDPOINTS.EP_USER,
        method:'POST',
        data:{
            firstname,
            lastname,
            email,
            password,
            passwordConfirm, 
            address,
            tel,
            userrights
        },
        ...CreateHeaders({}, {
            json: true,
            auth: true
        })
    })
}
    export const UpdateUser = (id, data) => {
        return axios({
            url: `${ENDPOINTS.EP_USER}/${id}`,
            method:'PUT',
            data,
        ...CreateHeaders({}, {
            json: true,
            auth: true
            })
        })
    }
 
    export const deleteOne = (_id) =>{
        return axios({
            url:`${ENDPOINTS.EP_USER}/${_id}`,
            method:'DELETE',
            ...CreateHeaders({},{
                json: true,
                auth: true
            })
        })
    }
    export const GetidUser =(id)=>{
        return axios({
            url:`${ENDPOINTS.EP_USER}/${id}`,
            method:'GET',
            ...CreateHeaders({},{
                json: true,
                auth: true
            })
        })
    }
 
    export const Updatepassword = (_id, data)=>{
        return axios({
            url:`${ENDPOINTS.EP_USER}/resetpass/${_id}`,
            method:'PUT',
            data,
            ...CreateHeaders({},{
                json: true,
                auth: true
            })
        })
    }
export const updateprofile = (id, data) =>{
    return axios({
        url:`${ENDPOINTS.EP_USER}/updateprofile/${id}`,
        method:'PUT',
        data,
        ...CreateHeaders({},{
            json: true,
            auth: true
        })
    })
}