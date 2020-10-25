import bcrypt from 'bcrypt'
import { Document, Model, model, Schema } from 'mongoose'
import { StatusUserEnum } from '../enuns/Enuns'
import { CreditCardSchema } from './CreditCard'
import { EMAILREGEX } from '../utils/Constants'
import { User } from '../models/User'

type UserDoc = Document & User

export const UserSchema = new Schema({
  fullName: {
    type: String,
    required: [true, 'Nome Completo Obrigatório'],
    trim: true
  },
  displayName: {
    type: String,
    trim: true,
    required: [true, 'Apelido Obrigatório']
  },
  email: {
    type: String,
    required: true,
    isEmail: true,
    match: [EMAILREGEX, 'E-mail inválido'],
    unique: true,
    trim: true,
    lowercase: true,
    index: true // @TODO
  },
  password: {
    type: String,
    required: true,
    maxLength: 15,
    minLength: 4,
    select: false
  },
  urlPhoto: {
    type: String
  },
  cpfCnpj: { // db.users.createIndex( { "email": 1 }, { sparse: true } )//FOR PERMIT FIELD NOT EXISTS
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
    sparse: true

  },
  phoneNumber: {
    type: String,
    select: false,
    maxlength: [11, 'Número de telefone inválido'],
    minlength: [11, 'Número de telefone inválido'],
    index: true,
    sparse: true,
    unique: 'true'
  },
  status: {
    type: String,
    default: StatusUserEnum.PENDENTE,
    enum: Object.values(StatusUserEnum)
  },
  isPeopleJuridica: {
    type: Boolean, default: false
  },
  creditCard: {
    type: CreditCardSchema,
    select: false,
    required: false
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
  timestamps: true,
  id: false,
  versionKey: false,
  toJSON: { virtuals: true } // for virtual works
})

UserSchema.virtual('freights', {
  ref: 'FreightS',
  localField: '_id',
  foreignField: 'user'
})

UserSchema.pre<UserDoc>('save', async function (): Promise<void> {
  if (this.password) {
    this.password = await bcrypt.hash(this.password.toString(), 8)
  }
})

export const UserS: Model<UserDoc> = model<UserDoc>('UserS', UserSchema)
