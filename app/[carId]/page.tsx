'use client'
import React from 'react'
import { CarI } from '../interface/CarInterface'
import Link from 'next/link'

function page({ params, searchParams }: { params: { carId: string }; searchParams: CarI }) {
  const carInformations = TakeThisCar(searchParams)
  return (
    <div className='flex flex-col lg:flex-row  justify-center pb-4 '>
      <div className='h-2/4   '>
        <p className='text-green-800 p-4 w-full'>
          {carInformations.brand} {'>'} {carInformations.name}
        </p>
        <img
          src={`${carInformations.photo}`}
          className='w-full lg:w-4/5 h-4/5  object-cover rounded-none lg:rounded-lg'
        />
        <div className='p-2 '>
          <p className='text-xl   font-bold'>Informações básicas</p>
          <img
            src='https://thumbs.dreamstime.com/b/het-bedrijfsconcept-bedrijfsvrouw-die-de-banner-houden-huurt-me-73893545.jpg'
            alt='hire me'
            className='h-40 w-40'
          />
          <p className='text-2xl mt-8 font-bold '>Motivos para me contratar:</p>
          <p className='w-11/12 lg:w-96'>
            Posso não ser o melhor do mundo no momento, meu codigo pode não ser perfeito, posso não ser o melhor
            indicado ou o melhor currículo, mas posso fazer acontecer..{' '}
            <span className='text-blue-400 font-bold'>Quem acreditou</span> em você quando você ainda não era um
            recrutador?
          </p>
          <p className='text-pink-600 font-bold'>Só preciso da sua oportunidade {'(;'}</p>
        </div>
      </div>

      <div className='border border-gray-200  rounded w-full lg:w-1/4  h-2/4 mt-14 p-4 '>
        <h2 className='font-bold text-2xl'>
          {carInformations.brand} {carInformations.name}
        </h2>
        <p className='border-b pb-4'>
          {carInformations.km} Km • {carInformations.localization}
        </p>

        <p className='font-bold text-2xl text-green-600 mt-4 mb-4'>
          <span className='text-xl text-gray-800'>R$</span>
          {carInformations.price}
        </p>

        <a href='https://google.com' target='_blank' className='text-blue-500 border-b  border-gray-200 '>
          Ver mais informações
        </a>

        <div className='mt-4'>
          <p>Ano</p>
          <p className='font-bold'>{carInformations.model}</p>
        </div>

        <Link href={'https://wa.link/narclt'} target='blank'>
          <div className='mt-10'>
            <button className='cursor-pointer relative group overflow-hidden border-2 w-full px-0 pt-2  border-green-500'>
              <span className='font-bold text-white text-xl relative z-10 group-hover:text-green-500 duration-500'>
                COMPRAR AGORA
              </span>
              <span className='absolute top-0 left-0 w-full bg-green-500 duration-500 group-hover:-translate-x-full h-full'></span>
              <span className='absolute top-0 left-0 w-full bg-green-500 duration-500 group-hover:translate-x-full h-full'></span>

              <span className='absolute top-0 left-0 w-full bg-green-500 duration-500 delay-300 group-hover:-translate-y-full h-full'></span>
              <span className='absolute delay-300 top-0 left-0 w-full bg-green-500 duration-500 group-hover:translate-y-full h-full'></span>
            </button>
          </div>
        </Link>
      </div>
    </div>
  )
}

function TakeThisCar(searchParams: CarI) {
  const name = searchParams.name
  const brand = searchParams.brand
  const model = searchParams.model
  const price = searchParams.price
  const photo = searchParams.photo
  const km = searchParams.km
  const localization = searchParams.localization
  return {
    name,
    brand,
    model,
    price,
    photo,
    km,
    localization
  }
}
export default page
