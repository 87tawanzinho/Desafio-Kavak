// Hook responsavel por pegar os carros da aplicação

import { instance } from '../axios/Instance'
import { Dispatch, SetStateAction } from 'react'
import { CarI } from '../interface/CarInterface'
import StatesPropsI from '../interface/StatesInterface'

const takeCars = async ({ setCars, setCarsFiltered, setIsLoading }: StatesPropsI) => {
  try {
    const response = await instance.get('/')

    let priceOrder = response.data.cars.sort((a: any, b: any) => b.price - a.price)

    setCars!(priceOrder)
    setCarsFiltered!(priceOrder)
  } catch (err) {
    console.error(err)
  } finally {
    setIsLoading!(false)
  }
}

export default takeCars
