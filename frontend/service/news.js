import axios from 'axios'

// internal 
import {ENDPOINTS, CreateHeaders} from './config'

export const GetNews = () =>{
    return axios({
        url:ENDPOINTS.EP_NEWS,
        method:'GET',
        ...CreateHeaders({},{
            json: true,
            auth: true
        })
    })
}

export const CreateNews = (newstitle, detail) =>{
    return axios ({
        url:ENDPOINTS.EP_NEWS,
        method:'POST',
        data:{
            newstitle, 
            detail,
        },
        ...CreateHeaders({}, {
            json: true,
            auth: true
        })
    })
}

export const UpdateNews = (id, data) => {
    return axios ({
        url:`${ENDPOINTS.EP_NEWS}/${id}`,
        method:'PUT',
        data,
        ...CreateHeaders({}, {
            json: true,
            auth: true
        })
    })
}
export const DeleteNews = _id =>{
    return axios({
        url:`${ENDPOINTS.EP_NEWS}/${_id}`,
        method:'DELETE',
        ...CreateHeaders({}, {
            json: true,
            auth: true
        })
    })
}
export const GetIdNews = (id) =>{
    return axios({
        url:`${ENDPOINTS.EP_NEWS}/${id}`,
        method:'GET',
        ...CreateHeaders({}, {
            json: true,
            auth: true
        })
    })
}