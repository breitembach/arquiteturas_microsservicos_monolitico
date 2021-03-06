import { Document, Model, model, Schema } from 'mongoose'
import { User } from '../models/User'

export interface Chat {
  _id: string;
  message: string;
  user: Partial<User>;
}

interface DocChat extends Document, Chat {
  _id: string
}

const ChatSchema = new Schema<Chat>({
  message: {
    Type: String
  },
  conversationId: {
    type: String,
    required: true,
    index: true
  },
  user: {
    type: Object
  },
  createdAt: {
    type: Date
  },
  updatedAt: {
    type: Date
  }
}, { versionKey: false, timestamps: true })

export const ChatS: Model<DocChat> = model<DocChat>('ChatS', ChatSchema)
