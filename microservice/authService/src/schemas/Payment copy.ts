import { Document, Model, model, Schema } from 'mongoose'
import { TypeBrand, TypeCurrency, TypeCountry } from 'cielo-api/dist/enuns/Enuns'
import { TypeBrandEnum, TypePaymentEnum } from '../enuns/Enuns'
interface CreditCardResponse {
  SaveCard: boolean,
  CardToken: string,
  Brand: TypeBrand
}

export interface Payment extends Document {
  user: string,
  MerchantOrderId: string,
  Customer: {
    Name: string
  };
  Payment: {
    ServiceTaxAmount: number,
    Installments: number,
    Interest: number,
    Capture: boolean,
    Authenticate: boolean,
    Recurrent: boolean,
    CreditCard: CreditCardResponse,
    Tid: number,
    ProofOfSale: number,
    AuthorizationCode: number,
    Provider: string, // @TODO ENUM
    PaymentId: string,
    Type: TypePaymentEnum
    Amount: number,
    ReceivedDate: Date
    Currency: TypeCurrency,
    Country: TypeCountry,
    ReturnCode: number,
    ReturnMessage: string,
    Status: number,
  }
}

const CreditCardPaymentShema = new Schema({
  SaveCard: {
    type: Boolean
  },
  CardToken: {
    type: String,
    required: [true, 'Token do cartão de credito é obrigatório'],
    maxlength: 36
  },
  Brand: {
    type: String,
    required: [true, 'Bandeira do cartão é obrigatório'],
    enum: [
      ...Object.values(TypeBrandEnum)
    ]
  }
}, { versionKey: false, _id: false })
const PaymentObjSchema = new Schema({
  ServiceTaxAmount: {
    type: Number
  },
  Installments: {
    type: Number,
    required: [true, 'Número de parcelas é obrigatório'],
    default: 1,
    min: 1,
    max: 99
  },
  Interest: {
    type: Number
  },
  Capture: {
    Type: Boolean
  },
  Authenticate: {
    type: Boolean
  },
  Recurrent: {
    type: Boolean
  },
  CreditCard: {
    type: CreditCardPaymentShema
  },
  Tid: {
    type: Number
  },
  ProofOfSale: {
    type: Number
  },
  AuthorizationCode: {
    type: Number
  },
  Provider: {
    type: String
  }, // @TODO ENUM
  PaymentId: {
    type: String
  },
  Type: {
    type: String,
    enum: ['CreditCard'],
    required: [true, 'Tipo de pagamento é obrigatório']
  },
  Amount: { // Amount is in Centavos
    type: Number,
    required: [true, 'Valor da venda é obrigatório']
  },
  ReceivedDate: {
    type: Date
  },
  Currency: {
    type: String
  },
  Country: {
    type: String
  },
  ReturnCode: {
    type: Number
  },
  ReturnMessage: {
    type: String
  },
  Status: {
    type: Number
  }

}, { versionKey: false, _id: false })

export const PaymentObjS = model('PaymentObjS', PaymentObjSchema)

export const PaymentSchema = new Schema({
  user: { type: Schema.Types.ObjectId, ref: 'UserS' },
  MerchantOrderId: {
    type: String,
    maxlength: 50,
    required: [true, 'MerchantOrderId é Obrigatório']
  },
  Customer: {
    Name: {
      type: String
    }
  },
  Payment: {
    type: PaymentObjSchema
  },
  createdAt: {
    type: Date, select: false
  }

}, { versionKey: false })

export const PaymentS: Model<Payment> = model<Payment>('PaymentS', PaymentSchema)
