import { Document, Model, model, Schema } from 'mongoose'

export interface Bank {
  agency: number
  account: number
  bank: string
  fullName: string
  cpfCnpj: string
}
export interface DocBank extends Document {
  agency: number
  account: number
  bank: string
  fullName: string
  cpfCnpj: string
}

const BankSchema = new Schema({
  agency: {
    type: Number,
    required: [true, 'Número da Agência é obrigatório']
  },
  account: {
    type: Number,
    required: [true, 'Número da conta é obrigatório']
  },
  bank: {
    type: String,
    required: [true, 'Número do banco é obrigatório']
  },
  fullName: {
    type: String,
    required: [true, 'Nome Completo é obrigatório']
  },
  cpfCnpj: {
    type: String,
    required: [true, 'Cpf é obrigatório'],
    validate: {
      validator: function (d: string): boolean {
        return d.length === 11
      },
      msg: 'Cpf Inválido'
    }
  }
}, { versionKey: false, _id: false })

export const BankS: Model<DocBank> = model<DocBank>('BankS', BankSchema)
