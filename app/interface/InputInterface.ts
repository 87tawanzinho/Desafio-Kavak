import { Dispatch, SetStateAction } from 'react'
import { CarI } from './CarInterface'

interface inputI {
  setCarsFiltered: Dispatch<SetStateAction<CarI[]>>
  carsFiltered: CarI[]
  cars: CarI[]
}

export default inputI
