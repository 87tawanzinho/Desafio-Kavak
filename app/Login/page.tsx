'use client'
import { jwtDecode } from 'jwt-decode'
import { useState } from 'react'
import { instance } from '../axios/Instance'

type login = {
  name: string
  password: string
}

type jwt = {
  name: string
  id: string
}
export default function Cadastro() {
  const instanceLogin = instance
  const [success, setSuccess] = useState('')
  const [error, setError] = useState('')
  const [warn, setWarn] = useState('')
  const [data, setData] = useState<login>({
    name: '',
    password: ''
  })

  const handleData = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setData((prev) => ({
      ...prev,
      [name]: value
    }))
  }

  const axiosRequest = async () => {
    setWarn('Tentando se conectar..')
    setSuccess('')
    setError('')
    try {
      const response = await instanceLogin.post('/loginUser', {
        name: data.name,
        password: data.password
      })

      if (response.data.token) {
        const decoded = jwtDecode<jwt>(response.data.token)
        window.localStorage.setItem('token', response.data.token)
        window.localStorage.setItem('name', decoded.name)
        window.localStorage.setItem('id', decoded.id)

        window.location.href = '/Dashboard'
      }
      setSuccess('Se conectando, aguarde..')
      setWarn('')
    } catch (err) {
      setError('Erro ao iniciar sessão')
      setWarn('')
    }
  }

  return (
    <div className='flex  '>
      <img
        src='https://images.unsplash.com/photo-1542282088-fe8426682b8f?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        className='h-screen w-1/2 object-cover hidden lg:block'
        alt='Img-Car'
      />

      <div className='flex flex-col items-center w-screen mt-40 gap-2'>
        <p className='text-2xl font-bold'>Iniciar sessão</p>
        <p className='text-gray-300 text-xs'>Nome: "123" Senha: "123"</p>
        <input type='text' placeholder='Nome' value={data.name} name='name' onChange={handleData} />
        <input type='password' placeholder='Senha' value={data.password} name='password' onChange={handleData} />
        <p className='text-center text-xs text-gray-400 px-4 w-96'>
          Ao clicar em "Entrar" confirmo que li e aceito os{' '}
          <span className='text-blue-400'>Termos e Condições e Aviso de privacidade</span> Kavak.
        </p>
        <button onClick={axiosRequest}>Entrar</button>
        {warn && <p className='text-yellow-600'>{warn}</p>}
        {success && <p className='text-green-600'>{success}</p>}
        {error && <p className='text-red-600'>{error}</p>}
      </div>
    </div>
  )
}
