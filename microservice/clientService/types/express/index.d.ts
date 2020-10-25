import { User } from '../../src/models/User'
import { Motorist } from '../../src/models/Motorist'

declare module 'express' {
  export interface Request {
    user?: User | Motorist
  }

}
