import axios from 'axios'
import {ENDPOINTS, CreateHeaders} from './config'

export const GetBanner = () =>{
    return axios({
        url:ENDPOINTS.EP_BANNER,
        method:'GET',
        ...CreateHeaders({}, {
            json: true,
            auth: true 
        })
    })
}
export const Getimg = (id) =>{
return axios({
    url:`${ENDPOINTS.EP_BANNER}/images/${id}`,
    method:'GET',
    ...CreateHeaders({}, {
        json: true,
        auth: true 
    })
})
}

export const CreateBanner = (name) =>{
    return axios({
        url:`${ENDPOINTS.EP_BANNER}/upload`,
        method:'POST',
        data:{name},
        ...CreateHeaders({}, {
            json: true,
            auth: true 
        })
    })
}
export const UpdateBanner = (_id, data) =>{
    return axios({
        url:`${ENDPOINTS.EP_BANNER}/${id}`,
        method:'PUT',
        data,
        ...CreateHeaders({}, {
            json: true,
            auth: true 
        })
    })
}
export const DeleteBanner = (_id) =>{
    return axios({
        url:`${ENDPOINTS.EP_BANNER}/${_id}`,
        method:'DELETE',
        ...CreateHeaders({}, {
            json: true,
            auth: true 
        })
    })
}
export const GetIdBanner = (id) =>{
    return axios({
        url:`${ENDPOINTS.EP_BANNER}/${id}`,
        method:'GET',
        ...CreateHeaders({}, {
            json: true,
            auth: true 
        })
    })
}