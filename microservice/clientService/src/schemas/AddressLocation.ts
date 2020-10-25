import { Document, Model, model, Schema } from 'mongoose'
import LatLngI, { LatLngSchema } from './LatLng'

export default interface AddressLocationI extends Document {
  address: string
  latLng: LatLngI
}
export const AddressLocationSchema = new Schema({
  address: {
    type: String,
    required: [true, 'Endereço obrigatório']
  },
  latLng: {
    type: LatLngSchema,
    required: [true, 'Latitude/Longitude inválido']
  }

}, { versionKey: false, _id: false })

export const AddressLocationS: Model<AddressLocationI> = model<AddressLocationI>('AddressLocationS', AddressLocationSchema)
