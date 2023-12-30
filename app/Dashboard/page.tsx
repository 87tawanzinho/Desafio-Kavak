'use client'
import { useEffect, useState } from 'react'
import DashboardForm from './components/DashboardForm'
import Image from 'next/image'
import sell from '@/public/images/sell.png'
import MyCars from './components/MyCars'
export default function Dashboard() {
  const [name, setName] = useState<string | null>(null)
  const [sellCar, setSellcar] = useState(false)
  useEffect(() => {
    // Check if running on the client side
    if (typeof window !== 'undefined') {
      // Access window.localStorage safely

      const storedName = window.localStorage.getItem('name')
      if (!storedName) {
        window.location.href = '/Login'
      }
      setName(storedName)
    }
  }, [])
  return (
    <div className='bg-gray-200 relative bg-opacity-50 w-full h-full p-8 lg:p-24 text-gray-900 lg:text-2xl flex flex-col gap-8'>
      <div className='text-xl'>
        <p>
          Olá, <span className='font-bold'>{name}</span>
        </p>
        <p>Seja bem vindo a sua central de vendas!</p>

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
