import { ScopedEnum, StatusUserEnum } from '../enuns/Enuns'

export interface LoginRes {
  _id: string
  token: string
  urlPhoto: string
  email: string
  fullName: string
  displayName: string
  scoped: ScopedEnum,
  status: StatusUserEnum
}
