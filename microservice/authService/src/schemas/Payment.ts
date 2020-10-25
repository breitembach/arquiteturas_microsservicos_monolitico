import { Document, Model, model, Schema } from 'mongoose'

export interface Payment extends Document {

}

export const PaymentSchema = new Schema({
  user: { type: Schema.Types.ObjectId, ref: 'UserS' },
  motorist: { type: Schema.Types.ObjectId, ref: 'MotoristS' },
  status: {
    type: String
  },
  refuse_reason: {
    type: String
  },
  status_reason: {
    type: String
  },
  acquirer_response_code: {
    type: String
  },
  acquirer_name: {
    type: String
  },
  acquirer_id: {
    type: String
  },
  authorization_code: {
    type: String
  },
  soft_descriptor: {
    type: String
  },
  tid: {
    type: Number
  },
  nsu: {
    type: Number
  },
  date_created: {
    type: Date
  },
  date_updated: {
    type: Date
  },
  amount: {
    type: Number
  },
  authorized_amount: {
    type: Number
  },
  paid_amount: {
    type: Number
  },
  refunded_amount: {
    type: Number
  },
  installments: {
    type: Number
  },
  id: {
    type: Number
  },
  cost: {
    type: Number
  },
  card_holder_name: {
    type: String
  },
  card_last_digits: {
    type: String
  },
  card_first_digits: {
    type: String
  },
  card_brand: {
    type: String
  },
  card_pin_mode: {
    type: String
  },
  card_magstripe_fallback: {
    type: Boolean
  },
  postback_url: {
    type: String
  },
  payment_method: {
    type: String
  },
  capture_method: {
    type: String
  },
  antifraud_score: {
    type: String
  },
  boleto_url: {
    type: String
  },
  boleto_barcode: {
    type: String
  },
  boleto_expiration_date: {
    type: String
  },
  referer: {
    type: String
  },
  ip: {
    type: String
  },
  subscription_id: {
    type: Number
  },
  phone: {
    type: String
  },
  address: {
    type: Object
  },
  customer: {
    type: Object
  },
  billing: {
    type: Object
  },
  shipping: {
    type: Object
  },
  items: [],
  split_rules: [{}],
  metadata: {},
  antifraud_metadata: {},
  reference_key: {
    type: String
  },
  device: {
    type: Object
  },
  local_transaction_id: {
    type: String
  },
  local_time: {
    type: String
  },
  fraud_covered: {
    type: Boolean
  },
  order_id: {
    type: String
  },
  risk_level: {
    type: String
  },
  receipt_url: {
    type: String
  },
  payment: {
    type: Object
  },
  addition: {
    type: Object
  },
  discount: Object,
  createdAt: {
    type: Date, select: false
  }

}, { versionKey: false })

export const PaymentS: Model<Payment> = model<Payment>('PaymentS', PaymentSchema)
