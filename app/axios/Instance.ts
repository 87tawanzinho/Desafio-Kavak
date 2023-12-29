import axios from 'axios'

export const instance = axios.create({
  baseURL: 'https://backend-desafio-havek.vercel.app/'
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
