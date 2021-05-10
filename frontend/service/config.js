import Router from 'next/router'

export const CreateHeaders = (headers = {}, options = {}) => {
  const opts = {
    headers: {}
  }
  if (options.json) {
    opts.headers['Content-Type'] = 'application/json'
  }

  opts.headers = {
    ...opts.headers,
    ...headers
  }
  if (options.auth) {
    opts.headers['Authorization'] = 'Bearer ' + localStorage.auth
  }
  return opts
  
}

// const url = 'http://128.199.127.236:3001/api/'

const url = 'http://localhost:3001/'


export const ENDPOINTS = {
  EP_LOGIN: `${url}auth/login`,
  EP_REGISTER:`${url}auth/register`,
  EP_GETDATALOGIN:`${url}auth`,
  EP_USER: `${url}user`,
  EP_MEMBER:`${url}member`,
  EP_AIRCONDITIONNING: `${url}airconditioning`,
  EP_RESERVATION: `${url}reservations`,
  EP_PROMOTION: `${url}promotion`,
  EP_INCOME: `${url}reportincome`,
  EP_NEWS:`${url}news`,
  EP_BANNER:`${url}banner`,
  EP_MAPS:`${url}mapsmember`
}

export const HandleAuth = error => {
  if (error.response && error.response.data.code === 'AUTH') {
    localStorage.auth = ''
    Router.push('/portal/auth/login')
  }
}