import axios from 'axios'
import {ENDPOINTS, CreateHeaders} from './config'


export const GetMaps =  () =>{
    return axios({
        url:ENDPOINTS.EP_MAPS,
        method:'GET',
        ...CreateHeaders({},{
            json: true,
            auth: true
        })
    })
}

export const Getmapsone = (query)=>{
    return axios({
        url:`${ENDPOINTS.EP_MAPS}/searchonce`,
        method:'GET',
        params:query,
        ...CreateHeaders({},{
            json: true,
            auth: true
        })
    })
}

export const CreateMaps = ( firstname, lastname, address, tel, lat ,lng) =>{
return axios({
    url:ENDPOINTS.EP_MAPS,
    method:'POST',
    data:{
        firstname, 
            lastname, 
            address, 
            tel,
            lat,
            lng
    },
        ...CreateHeaders({},{
                json: true,
                auth: true
            })
    })
}
export const UpdateMapsMember = (id, data) =>{
    return axios({
        url:`${ENDPOINTS.EP_MAPS}/${id}`,
        method:'PUT',
        data,
        ...CreateHeaders({},{
            json: true,
                auth: true
        })
    })
}
export const DeleteMaps = (_id) =>{
    return axios({
        url:`${ENDPOINTS.EP_MAPS}/${_id}`,
        method:'DELETE',
        ...CreateHeaders({}, {
            json: true,
            auth: true
        })
    })
}
export const GetIDMaps = (id) =>{
    return axios({
        url:`${ENDPOINTS.EP_MAPS}/${id}`,
        method:'GET',
        ...CreateHeaders({}, {
           json: true,
            auth: true 
        })
    })
}