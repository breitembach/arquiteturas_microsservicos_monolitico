import { Document, Model, model, Schema } from 'mongoose'
export interface CreditCard {
  id: string,
  brand: string,
  holder_name: string,
  first_digits: string,
  last_digits: string,
  country: string,
  fingerprint: string,
  customer?: any,
  valid: boolean,
  expiration_date: string,
  cvv: string,
  createdAt?: Date,
  updatedAt?: Date
}

export const CreditCardSchema = new Schema({
  id: {
    type: String,
    required: [true, 'ID do cartão de crédito é obrigatório']
  },
  brand: {
    type: String,
    select: false
  },
  holder_name: {
    type: String
  },
  first_digits: {
    type: String,
    maxlength: 6,
    minlength: 6,
    required: [true, 'Número do cartão obrigatório'],
    select: false
  },
  last_digits: {
    type: String,
    maxlength: 4,
    minlength: 4,
    required: [true, 'últimos digitos do cartão obrigatório']
  },
  country: {
    type: String,
    select: false
  },
  fingerprint: {
    type: String,
    select: false
  },
  customer: {
    type: Object
  },
  valid: {
    type: Boolean,
    required: [true, 'válido é obrigatório']
  },
  expiration_date: {
    type: String,
    maxlength: 4,
    minlength: 4,
    required: [true, 'Data de expiração inválida']
  },
  cvv: {
    type: String,
    select: false
  },
  createdAt: {
    type: Date, select: false
  },
  updatedAt: {
    type: Date, select: false
  }
}, { versionKey: false, _id: false })

export const CreditCardS: Model<CreditCard & Document> = model<CreditCard & Document>('CreditCardS', CreditCardSchema)
