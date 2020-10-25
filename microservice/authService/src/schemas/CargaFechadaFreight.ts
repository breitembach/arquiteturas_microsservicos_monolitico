import { Document, Model, model, Schema } from 'mongoose'
import { StatusFreightEnum, TypeFreight, ETypeWeight } from '../enuns/Enuns'
import { AddressLocationSchema } from './AddressLocation'
import { CargaFechadaFreight } from '../models/FreightA'
import { Vehicle } from '../models/Vehicle'
import { isNullEmpty } from '../utils/GenericUtils'
import { TypeVehicle, TypeCacamba } from '../enuns/VehicleEnum'

const VehicleSchema = new Schema({
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
    default: false
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
    // enum: {
    //   values: Object.values<string>(TypeDaily),
    //   message: 'Tipo diária inválido'
    // },

  }
}, { versionKey: false, _id: false })

// @ts-ignore
export interface CargaFechadaFreightDoc extends Document, CargaFechadaFreight {}

const CargaFechadaFreightSchema = new Schema({
  pickUpAddress: {
    type: AddressLocationSchema,
    required: [true, 'Endereço coleta obrigatório']
  },
  dropOffAddress: {
    type: AddressLocationSchema,
    required: [true, 'Endereço de entrega obrigatório']
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
    default: TypeFreight.CARGAFECHADA,
    enum: TypeFreight.CARGAFECHADA
  },
  typeWeight: {
    type: String,
    required: [true, 'Tipo do peso obrigatório'],
    enum: Object.values(ETypeWeight)
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
  totalPrice: {
    type: Number,
    required: [true, 'Preço do frete obrigatório']
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

// CargaFechadaFreightSchema.pre<CargaFechadaFreightDoc>('save', function (next: NextFunction): void {
//   this.vehicles = this.vehicles.map((v): Vehicle => {
//     const vehicleFinded = VEHICLES.get(v.typeVehicle)
//     switch (v.typeDaily) {
//       case TypeDaily.MORNING:
//       case TypeDaily.EVENING:
//         v.baseRate = vehicleFinded.halfDaily
//         break
//       case TypeDaily.DAILY:
//         v.baseRate = vehicleFinded.daily
//         break
//       // default:
//         // throw new Error('Tipo de diária inválida')
//     }
//     return v
//   })

//   next()
// })

// FreightSchema.pre<FreightI>('save', function (next: NextFunction): void {
//   try {
//     this.vehicles = this.vehicles.map<Vehicle>((v: Vehicle): Vehicle => {
//       const vehicle: Vehicle = VEHICLES.get(v.typeVehicle)
//       return {
//         typeVehicle: v.typeVehicle,
//         baseRate: vehicle.baseRate,
//         pricePerKm: vehicle.pricePerKm,
//         pricePerMin: !this.helpers ? vehicle.pricePerMin : vehicle.pricePerMin * this.helpers,
//         typeCacamba: v.typeCacamba
//       }
//     })

//     next()
//   } catch (error) {
//     next(error)
//   }
// })

export const CargaFechadaFreightS: Model<CargaFechadaFreightDoc> = model<CargaFechadaFreightDoc>('CargaFechadaS', CargaFechadaFreightSchema, 'freights')
