import axios from 'axios'

// axiosInstance.defaults.headers['Content-Type'] = 'application/json'

export const axiosInstanceTranscript = axios.create({
  baseURL: process.env.em + 'transcript'
})

export const axiosInstanceSlownik = axios.create({
  baseURL: process.env.REACT_APP_API_URL_SLOWNIK + 'slownik'
})
