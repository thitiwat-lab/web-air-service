import axios from 'axios'
import {ENDPOINTS, CreateHeaders} from './config'

export const GetMember = (query) => {
    return axios({
        url:ENDPOINTS.EP_MEMBER,
        method:'GET',
        params: query,
        ...CreateHeaders({},{
            json: true,
            auth: true
        })
    })
} 

export const GetOne = (query)=>{
    return axios({
        url:`${ENDPOINTS.EP_MEMBER}/searchone`,
        method:'GET',
        params:query,
        ...CreateHeaders({},{
             json: true,
             auth: true
        })
    })
 }

 export const CreateMember = (firstname, lastname, address, tel) =>{
     return axios ({
         url:ENDPOINTS.EP_MEMBER,
         method:'POST',
         data:{
            firstname, 
            lastname, 
            address, 
            tel
         },
         ...CreateHeaders({},{
            json: true,
            auth: true
         })
     })
 }

 export const UpdateMember = (id, data) =>{
     return axios ({
         url:`${ENDPOINTS.EP_MEMBER}/${id}`,
         method:'PUT',
         data,
        ...CreateHeaders({}, {
            json: true,
             auth: true
        })
     })
 }

 export const UpdateMap = (id, data) =>{
     return axios({
         url:`${ENDPOINTS.EP_MEMBER}/map/${id}`,
         method:'PUT',
         data,
         ...CreateHeaders({}, {
             json:true,
             auth:true,
         })
     })
 }

 export const DeletedMember = (_id) =>{
     return axios ({
         url:`${ENDPOINTS.EP_MEMBER}/${_id}`,
         method:'DELETE',
         ...CreateHeaders({}, {
            json: true,
            auth: true
         })
     })
 }

 export const GetIdMember = (id) =>{
     return axios({
         url:`${ENDPOINTS.EP_MEMBER}/${id}`,
         method:'GET',
         ...CreateHeaders({}, {
            json: true,
            auth: true
         })
     })
 }