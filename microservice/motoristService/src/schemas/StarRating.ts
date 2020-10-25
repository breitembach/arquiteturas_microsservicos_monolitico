import { Schema, Document, Model, model } from 'mongoose'

export interface StarRating {
  rate1: number
  rate2: number
  rate3: number
  rate4: number
  rate5: number
}

export const StarRatingSchema = new Schema({
  rate1: {
    type: Number,
    default: 0
  },
  rate2: {
    type: Number,
    default: 0
  },
  rate3: {
    type: Number,
    default: 0
  },
  rate4: {
    type: Number,
    default: 0
  },
  rate5: {
    type: Number,
    default: 1
  }
}, { _id: false })

export const StarRatingS: Model<StarRating & Document> = model<StarRating & Document>('StarRating', StarRatingSchema)
