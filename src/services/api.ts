import axios from 'axios'
import { DEV_BOOKS_SESSION_KEY } from '../constants/storage'
import { Session } from '../context/AuthContext/AuthContext'

export const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL
})

api.interceptors.request.use(
  (config) => {
    const session = localStorage.getItem(DEV_BOOKS_SESSION_KEY)
    if (session) {
      const parsedSession = JSON.parse(session) as Session //JSON.parse converte para objeto

      config.headers['authorization'] = `Bearer ${parsedSession.accessToken}`
    }
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)
