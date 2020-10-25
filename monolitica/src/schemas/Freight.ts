import { NextFunction } from 'connect'
import { Document, Model, model, Schema } from 'mongoose'
import { StatusFreightEnum, TypeFreight } from '../enuns/Enuns'
import { FreightA } from '../models/FreightA'
import { AddressLocationSchema } from './AddressLocation'

export interface FreightI extends Document, FreightA {
}

const FreightSchema = new Schema({
  pickUpAddress: {
    type: AddressLocationSchema,
    required: [true, 'Endereço coleta obrigatório']
  },
  dropOffAddress: {
    type: AddressLocationSchema,
    required: [true, 'Endereço de entrega obrigatório']
  }, 
  additionalWaypoints: [AddressLocationSchema],
  dateOfFreight: {
    type: Date,
    required: true,
    index: true
  },
  statusFreight: {
    type: StatusFreightEnum,
    default: StatusFreightEnum.PENDENTE,
    index: true,
    enum: Object.values<string>(StatusFreightEnum)
  },
  helpers: {
    type: Number,
    default: 0
  },
  totalPrice: {
    type: Number
  },
  freightDescription: {
    type: String,
    required: true,
    trim: true
  },
  travelDistance: {
    type: Number,
    default: 0
  },
  typeFreight: {
    type: String,
    default: TypeFreight.NORMAL,
    enum: TypeFreight.NORMAL
  },
  travelTime: {
    type: Number,
    default: 0
  },
  dateStartTravel: {
    type: Date
  },
  dateEndTravel: {
    type: Date
  },
  isSeguro: {
    type: Boolean
  },
  difficultyAccess: {
    type: String
  },
  encodedPoints: {
    type: String
  },
  weight: {
    type: Number,
    required: [true, 'Peso é Obrigatório']
  },
  lenght: {
    type: Number,
    default: 0
  },
  width: {
    type: Number,
    default: 0
  },
  height: {
    type: Number,
    default: 0
  },
  user: { type: Schema.Types.ObjectId, ref: 'UserS', required: [true, 'Usuário é Obrigatório'] },
  motorist: { type: Schema.Types.ObjectId, ref: 'MotoristS' },
  createdAt: {
    type: Date, select: false
  },
  updatedAt: {
    type: Date, select: false
  },
  userRated: { 
    select: false,
    type: Number,
    min: 1,
    max: 5
  },
  motoristRated: {
    select: false,
    type: Number,
    min: 1,
    max: 5
  }

}, {
  timestamps: true,
  versionKey: false
})

FreightSchema.pre<FreightI>('save', function (next: NextFunction): void {
 
  next()
})

FreightSchema.loadClass(FreightA)
export const FreightS: Model<FreightI> = model<FreightI>('FreightS', FreightSchema, 'freights')
