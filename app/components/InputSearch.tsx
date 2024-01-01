import usefilteredCars from '../hooks/useFilterCars'
import inputI from '../interface/InputInterface'

export default function InputSearch({ setCarsFiltered, carsFiltered, cars }: inputI) {
  const filteredHandle = (e: React.ChangeEvent<HTMLInputElement>) => {
    usefilteredCars!(e, setCarsFiltered, carsFiltered, cars)
  }
  return <input type='text' className='mt-5 ' placeholder='Procurar um carro' onChange={filteredHandle} />
}
