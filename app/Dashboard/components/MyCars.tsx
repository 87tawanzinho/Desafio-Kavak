// Rota relacionada a edição e remoção de carros, além da listagem.
// Aqui terá todos os carros criado pelo user.
import React from 'react'
import { instance } from '@/app/axios/Instance'
import { CarI, editCar } from '@/app/interface/CarInterface'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import edit from '@/public/images/edit.gif'
import Loading from '@/app/loading'
import formatNumber from '@/app/functions/format'

export default function MyCars() {
  const [vehicles, setVehicles] = useState<CarI[]>([])
  const [isEditing, setIsEditing] = useState(false)
  const [isLoading, setIsLoading] = useState(true)

  const [idEditing, setIdEditing] = useState<editCar>({ carId: '', owner: '' })
  const [warn, setWarn] = useState('')
  const [editedData, setEditedData] = useState<CarI>({
    name: '',
    brand: '',
    model: '',
    photo: '',
    price: '',
    localization: '',
    km: ''
  })

  // pega todos os carros do user
  const fetchData = async () => {
    try {
      setIsLoading(true)
      await new Promise((resolve) => setTimeout(resolve, 500))
      const id = window.localStorage.getItem('id')
      const res = await instance.get(`userCars/${id}`)
      const shortPriceCars = res.data.userCars.sort((a: any, b: any) => b.price - a.price)
      setVehicles(shortPriceCars)
    } finally {
      setIsLoading(false)
    }
  }

  // chama
  useEffect(() => {
    fetchData()
  }, [])

  // edição do carro
  const editCar = async () => {
    setWarn('Aguarde, estamos atualizando..')
    try {
      const priceFormated = formatNumber(editedData.price)
      const dataFormated = formatNumber(editedData.price) // todo
      const res = await instance.put(`/editCar/${idEditing.carId}/${idEditing.owner}`, {
        name: editedData.name,
        brand: editedData.brand,
        model: editedData.model,
        price: editedData.price,
        localization: editedData.localization,
        km: editedData.km,
        photo: editedData.photo.split(',')[1] // Extract the Base64-encoded part
      })
      fetchData()
      setIsEditing(false)
      setWarn('')
    } catch (err) {
      setWarn('Ocorreu um erro')
    }
  }

  // configuração para pegar a foto
  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]

    if (file) {
      const reader = new FileReader()
      reader.onloadend = () => {
        setEditedData((prev) => ({ ...prev, photo: reader.result as string }))
      }
      reader.readAsDataURL(file)
    }
  }

  // rota para deletar o carro
  const deleteCar = async (carId: string | undefined, userId: string | undefined) => {
    await instance
      .delete(`/user/${userId}/car/${carId}`)
      .then((res) => fetchData())
      .catch((err) => console.log(err))
  }

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <div className='mt-10 text-2xl'>
          <h2 className='text-gray-700'>Meus Veículos à venda</h2>
          <div className='bg-white h-96 rounded-lg text-xs lg:text-sm text-center pt-10 text-gray-700 mt-4 overflow-auto'>
            {vehicles.length > 0 ? (
              <div>
                <p>Veículos</p>
                {vehicles.map((car) => (
                  <div key={car._id} className='flex justify-between items-center mt-4 px-4'>
                    <div className='flex items-center gap-4'>
                      <img src={car.photo} alt='foto' className='h-10 w-10 object-cover rounded-lg' />
                      <p className='text-gray-600'>{car.name}</p>
                      <p className='text-yellow-600'>
                        <span className='text-green-800'>$</span>
                        {car.price}
                      </p>
                    </div>
                    <div className='flex items-center gap-2'>
                      <button
                        className='button-edit text-center'
                        onClick={() => {
                          setIsEditing(true)
                          setIdEditing({ carId: car._id, owner: car.owner })
                          setEditedData(car)
                        }}
                      >
                        Edit
                      </button>
                      <button className='text-center button-delete' onClick={() => deleteCar(car._id, car.owner)}>
                        X
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <p>Ainda não há veículos por aqui</p>
            )}
          </div>
          {isEditing ? (
            <div className='top-0 left-0 h-full w-full absolute bg-opacity-50 bg-gray-800 flex flex-col justify-center items-center'>
              <div className='bg-white w-11/12 h-auto  rounded-lg flex flex-col justify-center items-center text-center gap-4 relative formEdit p-4'>
                <Image src={edit} alt='edit' className='h-12 w-12' />
                <button className='absolute end-4 top-4 button-delete' onClick={() => setIsEditing(false)}>
                  X
                </button>
                <p className='text-lg font-bold'>Editar as informações desse Veículo</p>

                <div className='flex flex-col formEdit'>
                  {/** Inputs  */}
                  <div className='input-container flex flex-col'>
                    <label htmlFor='name' className='label'>
                      Nome
                    </label>
                    <input
                      id='name'
                      type='text'
                      value={editedData.name}
                      onChange={(e) => setEditedData((prev) => ({ ...prev, name: e.target.value }))}
                    />
                  </div>

                  <div className='input-container flex flex-col'>
                    <label htmlFor='brand' className='label'>
                      Marca
                    </label>
                    <input
                      id='brand'
                      type='text'
                      value={editedData.brand}
                      onChange={(e) => setEditedData((prev) => ({ ...prev, brand: e.target.value }))}
                    />
                  </div>

                  <div className='input-container flex flex-col'>
                    <label htmlFor='price' className='label'>
                      Preço
                    </label>
                    <input
                      id='price'
                      type='number'
                      value={editedData.price}
                      onChange={(e) => setEditedData((prev) => ({ ...prev, price: e.target.value }))}
                    />
                  </div>

                  <div className='input-container flex flex-col'>
                    <label htmlFor='km' className='label'>
                      Quilômetros
                    </label>
                    <input
                      id='km'
                      type='number'
                      value={editedData.km}
                      onChange={(e) => setEditedData((prev) => ({ ...prev, km: e.target.value }))}
                    />
                  </div>

                  <div className='input-container flex flex-col'>
                    <label htmlFor='localization' className='label'>
                      Localização
                    </label>
                    <input
                      id='localization'
                      type='text'
                      value={editedData.localization}
                      onChange={(e) => setEditedData((prev) => ({ ...prev, localization: e.target.value }))}
                    />
                  </div>

                  <div className='input-container flex flex-col mb-4'>
                    <label htmlFor='photo' className='label'>
                      Foto
                    </label>
                    <input id='photo' type='file' name='photo' onChange={handleFileChange} />
                  </div>

                  <button onClick={editCar}>Editar</button>
                  {warn && <p className='text-orange-600 text-xl mt-4'>{warn}</p>}
                </div>
              </div>
            </div>
          ) : null}
        </div>
      )}
    </>
  )
}
