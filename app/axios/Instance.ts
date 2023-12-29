import axios from 'axios'

export const instance = axios.create({
  baseURL: 'http://localhost:4000'
})

instance.interceptors.request.use(
  (config) => {
    const token = window.localStorage.getItem('token')

    // Se houver um token, adicione-o ao cabeçalho de autorização
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`
    }

    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)
