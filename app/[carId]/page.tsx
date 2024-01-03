import React from 'react'

function page({ params }: { params: { carId: string } }) {
  return <div className='flex h-screen items-center justify-center'>{params.carId}</div>
}

async function SearchThisCar() {}
export default page
