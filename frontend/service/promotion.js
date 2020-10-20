import axios from 'axios'

// internal
import {ENDPOINTS, CreateHeaders} from '../service/config'

export const GetPromotion = (query) =>{
    return axios({
        url:ENDPOINTS.EP_PROMOTION,
        method: 'GET',
        params: query,
        ...CreateHeaders({}, {
            json: true,
            auth: true
        })
    })
}

export const CreatePromotion = (promotion_name, description, discount, start_date, end_date) =>{
    return axios({
        url:ENDPOINTS.EP_PROMOTION,
        method:'POST',
        data:{
            promotion_name, 
            description, 
            discount,
            start_date, 
            end_date
        },
        ...CreateHeaders({}, {
            json: true,
            auth: true
        })
    })
}

export const UpdatePromotion = (id, data) =>{
    return axios({
        url:`${ENDPOINTS.EP_PROMOTION}/${id}`,
        method:'PUT',
        data,
        ...CreateHeaders({}, {
            json: true,
            auth: true
        })
    })
}

export const DeletePromotion = (_id) =>{
    return axios({
        url:`${ENDPOINTS.EP_PROMOTION}/${_id}`,
        method:'DELETE',
        ...CreateHeaders({}, {
            json: true,
            auth: true
        })
    })
}

export const GetPromotionId = (id) =>{
    return axios({
        url:`${ENDPOINTS.EP_PROMOTION}/${id}`,
        method: 'GET',
        ...CreateHeaders({}, {
            json: true,
            auth: true
        })
    })
}