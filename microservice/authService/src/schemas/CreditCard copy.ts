import { Document, Model, model, Schema } from 'mongoose'
import { TypeBrand } from 'cielo-api/dist/enuns/Enuns'
import { TypeBrandEnum, TypePaymentEnum } from '../enuns/Enuns'
export interface CreditCard extends Document {
  cardToken: string
  number: string
  brand: TypeBrand
  fullName: string
  cpfCnpj?: number,
  dateValid: string,
  type: TypePaymentEnum
}

export const CreditCardSchema = new Schema({
  cardToken: {
    type: String,
    required: [true, 'Token do cartão Obrigatório']
  },
  number: {
    type: String,
    trim: true,
    maxlength: 4,
    minlength: 4,
    required: [true, 'Número do cartão obrigatório']
  },
  dateValid: {
    type: String,
    required: [true, 'data de validade obrigatório']
  },
  brand: {
    type: String,
    required: true,
    enum: Object.values(TypeBrandEnum)
  },
  type: {
    type: String,
    enum: Object.values(TypePaymentEnum)
  },
  fullName: {
    type: String,
    required: [true, 'Nome do titular obrigatório']
  },
  cpfCnpj: {
    type: String
  }
}, { versionKey: false, _id: false })

export const CreditCardS: Model<CreditCard> = model<CreditCard>('CreditCardS', CreditCardSchema)
