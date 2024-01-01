import { Dispatch, SetStateAction } from 'react'
import { CarI } from '../interface/CarInterface'

const filteredCars = (
  e: React.ChangeEvent<HTMLInputElement>,
  setCarsFiltered: Dispatch<SetStateAction<CarI[]>>,
  carsFiltered: CarI[],
  cars: CarI[]
) => {
  if (!e.target.value) {
    setCarsFiltered(cars)
    return
  }

  let nameTarget = e.target.value

  const carsFilteredNow = carsFiltered.filter(
    (car: CarI) =>
      car.name.toLowerCase().includes(nameTarget.toLowerCase()) ||
      car.brand.toLowerCase().includes(nameTarget.toLowerCase())
  )
  console.log(carsFilteredNow)
  setCarsFiltered(carsFilteredNow)
}

export default filteredCars
