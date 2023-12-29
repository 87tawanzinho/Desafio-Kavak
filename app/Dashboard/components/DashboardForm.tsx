// formulario para criar veículos
import { instance } from '@/app/axios/Instance'
import { CarI } from '@/app/interface/CarInterface'
import validateForm from '@/app/validations/validateForm'
import { useEffect, useState } from 'react'

export default function DashboardForm() {
  const instanceCreate = instance
  const [userId, setUserId] = useState<string | null>('')
  const [data, setData] = useState<CarI>({
    name: '',
    brand: '',
    model: '',
    photo: '', // File data will be stored as a Base64-encoded data URL
    price: '',
    localization: '',
    km: ''
  })
  const [error, setError] = useState('')
  const [warn, setWarn] = useState('')
  const [buttonClicked, setButtonClicked] = useState(false)
  const validationResult = validateForm(data)
  const changeData = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setData((prev) => ({ ...prev, [name]: value }))
  }

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const userId = window.localStorage.getItem('id')
      if (!userId) {
        window.location.href = '/Login'
      }
      setUserId(userId)
    }
  })

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]

    if (file) {
      const reader = new FileReader()
      reader.onloadend = () => {
        setData((prev) => ({ ...prev, photo: reader.result as string }))
      }
      reader.readAsDataURL(file)
    }
  }

  const axiosRequest = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setError('')
    setWarn('Tentando criar..')

    if (!buttonClicked) {
      setWarn('')
      setError('')
      return
    }

    if (validationResult) {
      setWarn('')
      setError(validationResult)
      return
    }
    try {
      const response = await instanceCreate.post('/createCar', {
        userId: userId,
        name: data.name,
        brand: data.brand,
        model: data.model.toString(),
        photo: data.photo.split(',')[1], // Extract the Base64-encoded part
        price: data.price,
        localization: data.localization,
        km: data.km
      })
      console.log(response)
      window.location.reload()
    } catch (err) {
      console.error('Erro ao enviar o formulario:', err)
      setWarn('')
      setError('Ocorreu um erro, tente novamente mais tarde.')
    }
  }

  return (
    <form className='flex flex-col gap-4 md:w-1/2 shadow p-4 bg-zinc-400 rounded-lg ' onSubmit={axiosRequest}>
      <input type='text' placeholder='Nome do carro' name='name' value={data.name} onChange={changeData} />
      <input type='number' placeholder='Modelo' name='model' value={data.model} onChange={changeData} />
      <input type='text' placeholder='Marca' name='brand' value={data.brand} onChange={changeData} />
      <input type='number' placeholder='Preço' name='price' value={data.price} onChange={changeData} />
      <input type='Number' placeholder='Quilômetragem' name='km' value={data.km} onChange={changeData} />
      <input
        type='text'
        placeholder='Localização'
        name='localization'
        value={data.localization}
        onChange={changeData}
      />
      <input type='file' placeholder='Foto' name='photo' onChange={handleFileChange} />
      {error && <p className='text-red-900'>{error}</p>}
      {warn && <p className='text-gray-200'>{warn}</p>}
      <div className='flex gap-2 w-48'>
        <button type='submit' className='button-form-register' onClick={() => setButtonClicked(true)}>
          Cadastrar
        </button>
        <button
          className='button-form-back'
          onClick={() => {
            setWarn('')
            window.location.href = '/Dashboard'
          }}
        >
          Voltar
        </button>
      </div>
    </form>
  )
}
