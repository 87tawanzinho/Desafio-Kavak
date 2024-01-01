import filteredCars from '../hooks/filterCars'
import inputI from '../interface/InputInterface'
import StatesPropsI from '../interface/StatesInterface'

export default function InputSearch({ setCarsFiltered, carsFiltered, cars }: inputI) {
  const filteredHandle = (e: React.ChangeEvent<HTMLInputElement>) => {
    filteredCars!(e, setCarsFiltered, carsFiltered, cars)
  }
  return <input type='text' className='mt-5 ' placeholder='Procurar um carro' onChange={filteredHandle} />
}
