import lodash from 'lodash'

export default class PaymentReq {
  public amount: number
  public installments: number

  public installmentsIsValid (): boolean {
    if (!this.installments) throw new Error('Valor das parcelas obrigatório')
    if (!lodash.isNumber(this.installments)) throw new Error('Valor das parcelas deve ser Número')
    if (this.installments < 1 || this.installments > 99) throw new Error('Número de parcelas inválido')
    return true
  }

  public amountIsValid (): boolean {
    if (!this.amount) throw new Error('Valor a pagar vazio')
    if (!lodash.isNumber(this.amount)) throw new Error('Valor a pagar deve ser Número')
    if (this.amount <= 0) throw new Error('valor deve ser positivo')
    return true
  }
}
