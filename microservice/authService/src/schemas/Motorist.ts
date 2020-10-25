import bcrypt from 'bcrypt'
import { Document, Model, model, Schema } from 'mongoose'
import { StatusUserEnum } from '../enuns/Enuns'
import { StarRatingS } from './StarRating'
import { EMAILREGEX } from '../utils/Constants'
import { Motorist } from '../models/Motorist'
import { VehicleSchema } from './VehicleS'

export interface MotoristDoc extends Motorist, Document {
  _id: string
}

const MotoristSchema = new Schema<MotoristDoc>({
  fullName: {
    type: String,
    trim: true,
    required: [true, 'Nome Completo Obrigatório']
  },
  displayName: {
    type: String,
    required: [true, 'Apelido Obrigatório'],
    trim: true
  },
  email: {
    type: String,
    required: true,
    isEmail: true,
    match: [EMAILREGEX, 'E-mail inválido'],
    unique: true,
    trim: true,
    lowercase: true,
    index: true
  },
  password: {
    type: String,
    required: true,
    maxLength: 15,
    minLength: 4,
    trim: true,
    select: false
  },
  urlPhoto: {
    type: String,
    default: null
  },
  cpfCnpj: { 
    type: String,
    trim: true,
    select: false,
    validate: {
      validator: function (d: string): boolean {
        if (d) {
          return d.length === 11 || d.length === 14
        }
      },
      msg: 'Cpf/Cnpj inválido'
    },
    index: true,
    sparse: true,
    unique: false
  },
  phoneNumber: {
    type: String,
    select: false,
    maxlength: [11, 'Número de telefone inválido'],
    minlength: [11, 'Número de telefone inválido'],
    validate: {
      validator: function (d: string): boolean {
        if (d) {
          return d.length === 11
        }
      },
      msg: 'Número de telefone inválido'
    },
    index: true,
    sparse: true,
    unique: true
  },
  starRating: {
    type: Object,
    default: new StarRatingS(),
    select: true
  },
  status: {
    type: String,
    default: StatusUserEnum.PENDENTE,
    enum: Object.values(StatusUserEnum)
  },
  descriptionServices: {
    type: String
  },
  isMontagemDesmontagem: {
    type: Boolean,
    default: false
  },
  urlPhotoCnh: {
    type: String,
    default: null,
    select: false
  },
  urlPhotoDocumentVehicle: {
    type: String,
    default: null,
    select: false
  },
  urlPhotoDocumentHome: {
    type: String,
    default: null,
    select: false
  }, // @TODO DOCUMENT INTO OBJECT
  urlPhotoVehicle: {
    type: String,
    default: null,
    select: false
  },
  vehicles: {
    type: [VehicleSchema],
    default: [],
    required: [true, 'Escolha um veículo'] // not working
  },
  bank: {
    type: Object,
    select: false
  },
  tokenResetPassword: {
    type: String,
    select: false
  },
  createdAt: {
    type: Date, select: false
  },
  updatedAt: {
    type: Date, select: false
  }

}, {
  id: false,
  timestamps: true,
  versionKey: false,
  toJSON: { virtuals: true }
})
MotoristSchema.virtual('freights', {
  ref: 'FreightS',
  localField: '_id',
  foreignField: 'motorist'
})

MotoristSchema.pre<MotoristDoc>('save', async function (next): Promise<void> {
  if (this.password) {
    this.password = await bcrypt.hash(this.password.toString(), 8)
  }
  next()
})

export const MotoristS: Model<MotoristDoc> = model<MotoristDoc>('MotoristS', MotoristSchema)
