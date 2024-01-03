'use client'
// essa é uma sessão que inicialmente não iria ser feita, mas na madrugada eu decidi fazê-la
import React from 'react'
import { CarI } from '../interface/CarInterface'
import Link from 'next/link'

function page({ params, searchParams }: { params: { carId: string }; searchParams: CarI }) {
  const carInformations = TakeThisCar(searchParams)
  return (
    <div className='flex flex-col lg:flex-row  justify-center pb-4 '>
      <div className='h-2/4   '>
        <p className='text-blue-400 p-4 w-full'>
          {carInformations.brand} {'>'} {carInformations.name}
        </p>
        <img
          src={`${carInformations.photo}`}
          className='w-full lg:w-4/5 h-4/5  object-cover rounded-none lg:rounded-lg'
        />

        <div className='p-2 hidden lg:block'>
          <p className='text-xl  mb-4  font-bold'>Informações importantes</p>
          <img
            src='https://thumbs.dreamstime.com/b/het-bedrijfsconcept-bedrijfsvrouw-die-de-banner-houden-huurt-me-73893545.jpg'
            alt='hire me'
            className='h-40 w-40'
          />
        </div>
      </div>

      <div className='border border-gray-200  rounded w-full lg:w-1/4  h-2/4 mt-0 lg:mt-14 p-4 '>
        <h2 className='font-bold text-2xl'>
          {carInformations.brand} {carInformations.name}
        </h2>
        <p className='border-b pb-4'>
          {carInformations.km} Km • {carInformations.localization}
        </p>

        <p className='font-bold text-2xl text-blue-500 mt-4 mb-4'>
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
            <button className='cursor-pointer relative group overflow-hidden border-2 w-full px-0 pt-2  border-blue-500'>
              <span className='font-bold text-white text-xl relative z-10 group-hover:text-black duration-500'>
                COMPRAR AGORA
              </span>
              <span className='absolute top-0 left-0 w-full bg-blue-500 duration-500 group-hover:-translate-x-full h-full'></span>
              <span className='absolute top-0 left-0 w-full bg-blue-500 duration-500 group-hover:translate-x-full h-full'></span>

              <span className='absolute top-0 left-0 w-full bg-blue-500 duration-500 delay-300 group-hover:-translate-y-full h-full'></span>
              <span className='absolute delay-300 top-0 left-0 w-full bg-blue-500 duration-500 group-hover:translate-y-full h-full'></span>
            </button>
          </div>
        </Link>

        <div className='p-2 block lg:hidden mt-10'>
          <p className='text-xl  mb-4  font-bold'>Informações importantes</p>
          <img
            src='https://thumbs.dreamstime.com/b/het-bedrijfsconcept-bedrijfsvrouw-die-de-banner-houden-huurt-me-73893545.jpg'
            alt='hire me'
            className='h-40 w-40'
          />
        </div>
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
