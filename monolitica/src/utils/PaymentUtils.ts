import lodash from 'lodash'

export const isValidInstallments = (parcelas: number): boolean => {
  if (!parcelas) throw new Error('Valor das parcelas obrigatório')
  if (!lodash.isNumber(parcelas)) throw new Error('Valor das parcelas deve ser Número')
  if (parcelas < 1 || parcelas > 99) throw new Error('Número de parcelas inválido')
  return true
}
