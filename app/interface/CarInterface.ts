export interface CarI {
  name: string
  brand: string
  model: string
  price: string
  localization: string
  photo: any
  km: string
  _id?: string
  owner?: string
}

export interface editCar {
  carId: string | undefined
  owner: string | undefined
}
