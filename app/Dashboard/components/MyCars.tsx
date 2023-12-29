import { instance } from '@/app/axios/Instance'
import { CarI } from '@/app/interface/CarInterface'
import { useEffect, useState } from 'react'

export default function MyCars() {
  const [vehicles, setVehicles] = useState<CarI[]>([])

  const fetchData = async () => {
    const id = window.localStorage.getItem('id')
    const res = await instance.get(`userCars/${id}`)
    console.log(res)
    const shortPriceCars = res.data.userCars.sort((a: any, b: any) => b.price - a.price)
    setVehicles(shortPriceCars)
  }
  useEffect(() => {
    fetchData()
  }, [])

  const deleteCar = async (carId: string | undefined, userId: string | undefined) => {
    const deleted = await instance
      .delete(`/user/${userId}/car/${carId}`)
      .then((res) => fetchData())
      .catch((err) => console.log(err))
  }
  return (
    <div className='mt-10 text-2xl'>
      <p>Meus Veículos à venda</p>
      <div className='bg-white h-96 rounded-lg text-sm text-center pt-10 text-gray-700 mt-4'>
        {vehicles.length >= 0 ? (
          <div>
            <p>Meus Veículos</p>
            {vehicles.map((car) => (
              <div key={car._id} className='flex justify-between items-center mt-4 px-4'>
                <div className='flex items-center gap-4  '>
                  <img src={car.photo} alt='foto' className='h-10 w-10 object-cover rounded-lg' />
                  <p className='text-gray-600'>{car.name}</p>
                  <p className='text-green-800'>${car.price}</p>
                </div>
                <div className='flex items-center gap-2'>
                  <button className='button-edit text-center' onClick={() => deleteCar(car._id, car.owner)}>
                    Edit
                  </button>
                  <button className=' text-center button-delete' onClick={() => deleteCar(car._id, car.owner)}>
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
    </div>
  )
}
