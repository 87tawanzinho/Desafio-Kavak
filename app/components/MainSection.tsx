'use client'
// Sessão dos carros
import Image from 'next/image'
import gps from '@/public/images/gps.png'
import { instance } from '../axios/Instance'
import { useEffect, useState } from 'react'
import { CarI } from '../interface/CarInterface'
export default function Mainsection() {
  const axiosI = instance // pega a url da api
  const [isLoading, setIsLoading] = useState(false)
  const [cars, setCars] = useState<CarI[]>([
    // define o modelo do carro
    {
      name: '',
      brand: '',
      model: '',
      photo: '',
      price: '',
      localization: '',
      km: '',
      _id: ''
    }
  ])
  const takeCars = async () => {
    // pega os carros
    try {
      const response = await axiosI.get('/')
      // todo -- tipagem
      let priceOrder = response.data.cars.sort((a: any, b: any) => b.price - a.price) // ordena
      setCars(priceOrder)
    } catch (err) {
      console.log(err)
    } finally {
      setIsLoading(false)
    }
  }
  useEffect(() => {
    const loading = async () => {
      setIsLoading(true)
      await new Promise((resolve) => setTimeout(resolve, 700))
    }
    loading()
    takeCars()
  }, [])
  return (
    <>
      {isLoading ? (
        <div className='mt-20 flex flex-col justify-center items-center gap-4'>
          <img
            src='https://thumbs.dreamstime.com/b/het-bedrijfsconcept-bedrijfsvrouw-die-de-banner-houden-huurt-me-73893545.jpg'
            alt='hire me'
            className='h-40 w-40'
          />
          <div className='animate-pulse flex flex-col items-center gap-4 w-60'>
            <div>
              <div className='w-48 h-6 bg-slate-400 rounded-md'></div>
              <div className='w-28 h-4 bg-slate-400 mx-auto mt-3 rounded-md'></div>
            </div>
            <div className='h-7 bg-slate-400 w-full rounded-md'></div>
            <div className='h-7 bg-slate-400 w-full rounded-md'></div>
            <div className='h-7 bg-slate-400 w-full rounded-md'></div>
            <div className='h-7 bg-slate-400 w-1/2 rounded-md'></div>
          </div>
        </div>
      ) : (
        <div className='flex flex-col lg:flex-row  lg:flex-wrap p-4 mt-10 lg:p-24 gap-8'>
          {cars.length > 1 &&
            cars.map((car) => (
              <main key={car._id}>
                <div className='border rounded-lg  border-gray-200 cursor-pointer  hover:bg-gray-100 transition-all'>
                  <img src={`${car.photo}`} className='w-screen lg:w-72 h-48 object-cover'></img>
                  <div className=' pt-2 flex flex-col gap-2 '>
                    <p className='font-bold px-4'>
                      <span>{car.brand} </span>
                      {car.name}
                    </p>
                    <p className='text-sm border-b-2 border-gray-100 px-4'>
                      {car.model} {car.km}
                      <span className='text-red-800 font-bold'>Km</span>
                    </p>
                    <p className='mt-2 text-gray-400 px-4'>Preço à vista</p>
                    <p className='font-bold text-xl text-gray-800 px-4'>
                      <span className='text-sm text-gray-600 mr-1'>R$</span>
                      {car.price}
                    </p>
                    <p className='p-4 mt-4 border-t-2 pt-4 pb-4 border-gray-100 text-sm flex items-center gap-2 text-gray-700 '>
                      <Image src={gps} alt='gps' className='h-4 w-4 object-cover' />
                      {car.localization}
                    </p>
                  </div>
                </div>
              </main>
            ))}
        </div>
      )}
    </>
  )
}
