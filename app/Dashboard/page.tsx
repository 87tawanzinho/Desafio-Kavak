'use client'
import { useEffect, useState } from 'react'
import DashboardForm from './components/DashboardForm'
import Image from 'next/image'
import sell from '@/public/images/sell.png'
import MyCars from './components/MyCars'
import useLocalStorageName from '../hooks/useLocalStorageExistName'
export default function Dashboard() {
  const [name, setName] = useState<string | null>(null)
  const [sellCar, setSellcar] = useState(false)
  useEffect(() => {
    // Check if running on the client side
    useLocalStorageName(setName)
  }, [])
  return (
    <div className='bg-gray-200 relative bg-opacity-50 w-full h-full p-8 lg:p-24 text-gray-900 lg:text-2xl flex flex-col gap-8'>
      <div className='text-lg lg:text-xl'>
        <p>
          Olá, <span className='font-bold'>{name}</span>
        </p>
        <p className='text-pretty '>Seja bem vindo a sua central de vendas!</p>

        <div className='mt-10'>
          {sellCar ? (
            <DashboardForm setSellCar={() => setSellcar(!sellCar)} />
          ) : (
            <div className='flex gap-8 mt-20'>
              <Image src={sell} alt='vendas' />
              <button onClick={() => setSellcar(true)} className='lg:text-lg'>
                Vender seu carro
              </button>
            </div>
          )}
        </div>
      </div>
      <MyCars />
    </div>
  )
}
