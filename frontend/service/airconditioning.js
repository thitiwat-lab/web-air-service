import axios from 'axios'
import {ENDPOINTS, CreateHeaders} from './config'

export const GetAir = (query) =>{
    return axios({
        url:ENDPOINTS.EP_AIRCONDITIONNING,
        method:'GET',
        params:query,
        ...CreateHeaders({},{
         json: true,
         auth: true
        })
    })
}
export const CreateAir = (name_air, btu, price, create_date, update_date) =>{
    return axios({
        url:ENDPOINTS.EP_AIRCONDITIONNING,
        method:'POST',
        data:{name_air, btu, price, create_date, update_date},
        ...CreateHeaders({},{
            json: true,
            auth: true
        })
    })
}
export const EditAir = (id, data) =>{
    return axios({
        url:`${ENDPOINTS.EP_AIRCONDITIONNING}/${id}`,
        method:'PUT',
        data,
    ...CreateHeaders({}, {
        json: true,
        auth: true
        })
    })
}
export const deleteAir = (_id) =>{
    return axios({
        url:`${ENDPOINTS.EP_AIRCONDITIONNING}/${_id}`,
        method:'DELETE',
        ...CreateHeaders({},{
            json: true,
            auth: true
        })
    })
}