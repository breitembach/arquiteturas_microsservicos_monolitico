import { StatusUserEnum } from '../enuns/Enuns'
import lodash from 'lodash'
import { BadRequest } from '../erros/Exceptions'

export const statusUserIsOk = (status: StatusUserEnum): void => {
  switch (status) {
    case StatusUserEnum.ATIVO:
      break
    case StatusUserEnum.PENDENTE:
      throw new BadRequest({ message: 'Você está Pendente e logo iremos liberar seu acesso :)' })
    case StatusUserEnum.BLOQUEADO:
      throw new BadRequest({ message: 'Desculpe, você se encontra bloqueado, favor entrar em contato!' })
    default:
      throw new BadRequest({ message: 'Desculpe usuário inválido, favor entrar em contato!' })
  }
}

export const isNullEmpty = (value: string): boolean => {
  try {
    return value.trim() == '' || value == undefined
  } catch (error) {
    return true
  }
}

export const removePropertiesEmpty = (obj): any => {
  return lodash.pickBy(obj, lodash.identity)
}

export const onlyDigits = (value: string): string => {
  return value.replace(/\D/g, '')
}
