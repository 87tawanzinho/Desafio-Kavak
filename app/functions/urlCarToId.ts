import { CarI } from '../interface/CarInterface'

const UrlToCarId = (car: CarI) => {
  return `/car?name=${car.name}&brand=${car.brand}&model=${car.model}&price=${car.price}&km=${car.km}&photo=${car.photo}&localization=${car.localization}`
}

export default UrlToCarId
