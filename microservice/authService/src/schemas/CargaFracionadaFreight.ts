import { StatusFreightEnum, TypeFreight } from '../enuns/Enuns'
import { AddressLocationSchema } from './AddressLocation'
import { CargaFracionadaFreight } from '../models/FreightA'
import { isNullEmpty } from '../utils/GenericUtils'
import { Vehicle } from '../models/Vehicle'

import { Document, Schema, Model, model } from 'mongoose'
import { VehicleSchema } from './VehicleS'

type TVehicle = Omit<Vehicle, 'daily' |'halfDaily'> & Document

export interface CargaFracionadaFreightDoc extends Document, CargaFracionadaFreight {
  _id: string
}

const CargaFechadaFreightSchema = new Schema({
  pickUpAddress: {
    type: AddressLocationSchema,
    required: [true, 'Endereço coleta obrigatório']
  },
  dateOfFreight: {
    type: Date,
    required: true,
    index: true
  },
  vehicles: {
    type: [VehicleSchema],
    validate: {
      validator: (d: Vehicle[]): boolean => {
        try {
          return !isNullEmpty(d[0].typeVehicle)
        } catch (error) {
          return false
        }
      },
      msg: 'Veículo é obrigatório'
    },
    required: [true, 'Escolha um veículo'] // not working
  },
  statusFreight: {
    type: StatusFreightEnum,
    default: StatusFreightEnum.PENDENTE,
    index: true,
    enum: Object.values<string>(StatusFreightEnum)
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
  typeFreight: {
    type: String,
    default: TypeFreight.CARGAFRACIONADA,
    enum: TypeFreight.CARGAFRACIONADA
  },
  isSeguro: {
    type: Boolean,
    default: false
  },
  encodedPoints: {
    type: String
  },
  weight: {
    type: Number,
    required: [true, 'Peso é Obrigatório']
  },
  user: { type: Schema.Types.ObjectId, ref: 'UserS', required: [true, 'Usuário é Obrigatório'] },
  motorist: { type: Schema.Types.ObjectId, ref: 'MotoristS', default: null },
  createdAt: {
    type: Date, select: false
  },
  updatedAt: {
    type: Date, select: false
  },
  userRated: { // becouse when client rated i have a information
    select: false,
    type: Number,
    min: 1,
    max: 5,
    required: false
  },
  motoristRated: {
    select: false,
    type: Number,
    required: false,
    min: 1,
    max: 5
  }

}, {
  timestamps: true,
  versionKey: false
})

export const CargaFracionadaS: Model<CargaFracionadaFreightDoc> = model<CargaFracionadaFreightDoc>('CargaFracionadaS', CargaFechadaFreightSchema, 'freights')
