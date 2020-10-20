import axios from 'axios'
import {ENDPOINTS, CreateHeaders} from './config'

export const GetIncome = (query) =>{
    return axios ({
        url:ENDPOINTS.EP_INCOME,
        method:'GET',
        params:query,
        ...CreateHeaders({},{
            json: true,
            auth: true 
        })
    })
}
export const CreateIncome = (firstname, lastname, tel) =>{
    return axios({
        url:ENDPOINTS.EP_INCOME,
        method:'POST',
        data:{
            firstname, 
            lastname, 
            tel, 
            // NinethousandBTU, 
            // TwelvethousandBTU, 
            // repair, 
            // pricerepair, 
            // promotion, 
            // sum,
        },
        ...CreateHeaders({}, {
            json: true,
            auth: true 
        })
    })
}
export const UpdateIncome = (id, data) =>{
    return axios({
        url:`${ENDPOINTS.EP_INCOME}/${id}`,
        method:'PUT',
        data,
        ...CreateHeaders({}, {
            json: true,
            auth: true
        })
    })
}

export const DeletedIncome = (_id) =>{
    return axios({
        url:`${ENDPOINTS.EP_INCOME}/${_id}`,
        method:'DELETE',
        ...CreateHeaders({}, {
            json:true,
            auth:true,
        })
    })
}

export const GetIdincome = (id) =>{
    return axios({
        url:`${ENDPOINTS.EP_INCOME}/${id}`,
        method:'GET',
        ...CreateHeaders({}, {
            json:true,
            auth:true,
        })
    })
}

export const UpdateStatusIncome = (id, data) =>{
    return axios ({
        url:`${ENDPOINTS.EP_INCOME}/updatestatus/${id}`,
        method: 'PUT',
        data,
        ...CreateHeaders({},{
            json:true,
            auth:true,
        })
    })
}