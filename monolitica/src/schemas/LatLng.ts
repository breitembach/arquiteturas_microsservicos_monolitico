import { Document, Model, model, Schema } from 'mongoose'
import { isValidLat, isValidLng } from '../utils/LatLngUtils'

export default interface LatLngI extends Document {
  lat: number
  lng: number
}

export const LatLngSchema = new Schema({
  lat: {
    type: Number,
    required: true,
    validate: isValidLat
  },
  lng: {
    type: Number,
    required: true,
    validate: isValidLng
  }
}, { versionKey: false, _id: false })

export const LatLngS: Model<LatLngI> = model<LatLngI>('LatLngS', LatLngSchema)
