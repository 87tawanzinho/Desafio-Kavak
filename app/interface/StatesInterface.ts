import { ChangeEvent, Dispatch, SetStateAction } from 'react'
import { CarI } from './CarInterface'

interface StatesPropsI {
  e?: React.ChangeEvent<HTMLInputElement>
  setCars?: Dispatch<SetStateAction<CarI[]>>
  cars?: SetStateAction<CarI[]>
  carsFiltered?: SetStateAction<CarI[]>
  setCarsFiltered: Dispatch<SetStateAction<CarI[]>>
  setIsLoading?: Dispatch<SetStateAction<boolean>>
}

export default StatesPropsI
