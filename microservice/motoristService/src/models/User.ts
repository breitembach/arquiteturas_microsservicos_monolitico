import { StatusUserEnum } from '../enuns/Enuns'
import { FreightI } from '../schemas/Freight'
import { CreditCard } from '../schemas/CreditCard'

export interface User {
  _id?: string
  fullName: string
  displayName: string
  email: string
  password: string
  urlPhoto?: string
  cpfCnpj?: string
  phoneNumber?: string
  status?: StatusUserEnum
  isPeopleJuridica: boolean
  creditCard?: CreditCard
  tokenResetPassword?: string
  freights?: FreightI[]
}
