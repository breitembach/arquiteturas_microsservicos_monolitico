import { Schema, Model, model, Document } from 'mongoose'
import { TypeCacamba, TypeVehicle } from '../enuns/VehicleEnum'
import { Vehicle } from '../models/Vehicle'

type TVehicle = Omit<Vehicle, 'daily' |'halfDaily'> & Document

export const VehicleSchema = new Schema({
  typeVehicle: {
    type: String,
    required: [true, 'Tipo do veículo é obrigatório'],
    enum: {
      values: Object.values<string>(TypeVehicle),
      message: 'Enum inválido'
    }
  },
  typeCacamba: {
    type: [{ type: String }],
    required: [true, 'Tipo de implemento inválido'],
    enum: {
      values: Object.values<string>(TypeCacamba),
      message: 'Enum inválido'
    }
  },
  selected: {
    type: Boolean,
    required: false
  },
  pricePerKm: {
    type: Number
  },
  pricePerMin: {
    type: Number
  },
  baseRate: {
    type: Number
  },
  typeDaily: {
    type: String
  }
}, { versionKey: false, _id: false })

export const VehicleS: Model<TVehicle> = model<TVehicle>('VehicleS', VehicleSchema)
