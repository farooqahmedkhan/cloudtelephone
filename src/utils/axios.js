import axios from "axios"

axios.defaults.baseURL = import.meta.env.VITE_API_URL

// axios.interceptors.request.use( ( request ) => {
//   request.headers.Authorization = `Bearer ${localStorage.getItem( 'token' )}`
//   request.headers["Content-Type"] = "application/json; charset=utf-8"
//   return request
// } )

axios.interceptors.response.use( function ( response ) {
  return response
} )

export default axios