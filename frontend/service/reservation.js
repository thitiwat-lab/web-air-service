import axios from 'axios'

// internal
import {ENDPOINTS, CreateHeaders} from '../service/config'


export const GetResrvation = (query) =>{
    return axios({
        url:ENDPOINTS.EP_RESERVATION,
        method:'GET',
        params:query,
        ...CreateHeaders({},{
            json: true,
            auth: true
        })
        })
} 
export const Createreservation = (firstname, lastname, address, tel, amount, reservations_date)=>{
    return axios({
        url:ENDPOINTS.EP_RESERVATION,
        method:'POST',
        data:{
            firstname,
            lastname,
            address,
            tel,
            amount,
            reservations_date
        },
        ...CreateHeaders({},{
            json: true,
            auth: true
        })
    })
}
export const UpdateReservation = (id, data)=>{
    return axios({
        url:`${ENDPOINTS.EP_RESERVATION}/${id}`,
        method:'PUT',
        data,
        ...CreateHeaders({},{
            json: true,
            auth: true
        })
    })
}
export const DeleteQue = _id =>{
    return axios({
        url:`${ENDPOINTS.EP_RESERVATION}/${_id}`,
        method:'DELETE',
        ...CreateHeaders({},{
            json: true,
            auth: true
        })
    })
}

export const Reservationmaps = (id ,data) =>{
    return axios ({
        url:`${ENDPOINTS.EP_RESERVATION}/maps/${id}`,
        method:'PUT',
        data,
        ...CreateHeaders({}, {
            json: true,
            auth: true
        })
    })
}

export const GetreservationID = (id) =>{
    return axios ({
        url:`${ENDPOINTS.EP_RESERVATION}/${id}`,
        method: 'GET',
        ...CreateHeaders({}, {
            json: true,
            auth: true
        })
    })
}
export const Getdate = (query) =>{
        return axios({
        url:`${ENDPOINTS.EP_RESERVATION}/searchone`,
        method:'GET',
        params:query,
        ...CreateHeaders({}, {
            json: true,
            auth: true
        })
    })
}