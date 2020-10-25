import { StatusUserEnum } from '../enuns/Enuns'
import {  Bank } from '../schemas/Bank'
import { FreightI } from '../schemas/Freight'

export interface Motorist {
  _id?: string
  fullName: string
  displayName: string
  email: string
  urlPhoto?: string
  password: string
  cpfCnpj?: string
  phoneNumber: string
  status: StatusUserEnum
  descriptionServices?: string
  rate?: number
  urlPhotoCnh?: string
  urlPhotoDocumentVehicle?: string
  urlPhotoDocumentHome?: string
  urlPhotoVehicle?: string
  freights?: FreightI[]
  bank?: Bank
  tokenResetPassword?: string
  createdAt: string
  updatedAt:string
}
