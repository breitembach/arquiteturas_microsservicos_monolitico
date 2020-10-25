/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { Moment } from 'moment'
import { StatusFreightEnum, TypeFreight, ETypeWeight } from '../enuns/Enuns'
import { getPricesVehicle } from '../helpers/FreightHelpers'
import AddressLocationI from '../schemas/AddressLocation'
import { Vehicle } from './Vehicle'
import { Motorist } from './Motorist'
import { User } from './User'

export abstract class FreightA {
  public pickUpAddress: AddressLocationI
  public dropOffAddress: AddressLocationI
  public additionalWaypoints: AddressLocationI[]
  public dateOfFreight: Date | string | Moment
  public vehicles: Vehicle[]
  public statusFreight: StatusFreightEnum
  public helpers?: number
  public totalPrice?: number
  public freightDescription: string
  public travelDistance: number
  public travelTime: number
  public dateStartTravel: string
  public dateEndTravel: Date | string | Moment
  public difficultyAccess: string
  public encodedPoints: string
  public weight: number
  public typeFreight: TypeFreight
  public lenght: number
  public width: number
  public height: number
  public user: User | string
  public motorist?: Motorist | string
  public userRated?: number
  public motoristRated?: number

  public setPricesVehicles () {
    this.vehicles.forEach((v: Vehicle, i) => {
      const prices = getPricesVehicle(v.typeVehicle)
      this.vehicles[i].baseRate = prices.baseRate
      this.vehicles[i].baseRate = prices.pricePerKm
      this.vehicles[i].baseRate = prices.pricePerMin
    })
  }
}

export interface CargaFechadaFreight {
  _id?: string
  pickUpAddress: AddressLocationI
  dropOffAddress: AddressLocationI
  additionalWaypoints: AddressLocationI[]
  dateOfFreight: Date | string | Moment
  vehicles: Vehicle[] // @TODO OMIT PROPERTIES PRICE EX.
  statusFreight?: StatusFreightEnum
  totalPrice: number
  freightDescription: string
  difficultyAccess: string
  travelDistance: number
  travelTime: number
  chargeValue: number
  dateStartTravel?: string
  dateEndTravel?: Date | string | Moment
  encodedPoints: string
  isSeguro: boolean
  weight: number
  typeFreight?: TypeFreight
  typeWeight: ETypeWeight
  user: User | string | undefined
  motorist?: Motorist
  userRated?: number
  motoristRated?: number
}

export interface CargaFracionadaFreight {
  _id?: string
  pickUpAddress: AddressLocationI
  freightDescription: string
  travelDistance: number
  dateOfFreight: Date | string | Moment
  travelTime: number
  vehicles: Vehicle[]
  dateStartTravel?: string
  dateEndTravel?: Date | string | Moment
  encodedPoints: string
  isSeguro: boolean
  weight: number
  totalPrice: number
  typeFreight?: TypeFreight
  user: User | string | undefined
  motorist?: Motorist
  userRated?: number
  motoristRated?: number
  freightPrice: number
}

export type GenericFreight = FreightA & CargaFechadaFreight & CargaFracionadaFreight;
