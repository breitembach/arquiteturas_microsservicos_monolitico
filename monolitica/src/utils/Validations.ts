import { ScopedEnum } from '../enuns/Enuns'
import lodash from 'lodash'

export const isValidRequest = (data: any, expectedFields: any):boolean => {
  const hasAllFields = expectedFields.reduce((acc, field):boolean => {
    return acc && data.hasOwnProperty(field)
  }, true)
  return hasAllFields
}

export const isValidScopedEnum = (scoped: number): boolean => {
  try {
    return Object.values(ScopedEnum).includes(scoped)
  } catch (error) {
    return false
  }
}

export const isValidReal = (amount: number): boolean => {
  if (!amount) throw new Error('Valor a pagar vazio')
  if (!lodash.isNumber(amount)) throw new Error('Valor a pagar deve ser Número')
  if (amount <= 0) throw new Error('valor deve ser positivo')
  return true
}

export const isEmailValid = (email: string): boolean => {
  const regEmail = /^[-!#$%&'*+/0-9=?A-Z^_a-z`{|}~](\.?[-!#$%&'*+/0-9=?A-Z^_a-z`{|}~])*@[a-zA-Z0-9](-*\.?[a-zA-Z0-9])*\.[a-zA-Z](-?[a-zA-Z0-9])+$/
  if (!email) return false

  if (email.length > 256) return false

  if (!regEmail.test(email)) return false

  // Further checking of some things regex can't handle
  const [account, address] = email.split('@')
  if (account.length > 64) return false

  const domainParts = address.split('.')
  if (domainParts.some(function (part): boolean {
    return part.length > 63
  })) return false

  return true
}
