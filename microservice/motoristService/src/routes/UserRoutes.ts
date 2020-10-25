import { Response, Router, Request } from 'express'
import { FreightI, FreightS } from '../schemas/Freight'
import { CustomQuery, getLimit } from '../models/ApiQuery'
import ApiResponse from '../models/ApiResponse'
import { User } from '../models/User'
import { FreightA } from '../models/FreightA'
const userRoutes = Router()

type TypeRes<T> = T | ApiResponse;


userRoutes.get('/fretes', async (req: Request<any, TypeRes<FreightI[]>, any, CustomQuery<Omit<FreightA, 'user'>>>, res): Promise<any> => {

  try {
    const { sort, limit, skip, ...where } = req.query

    const freights = await FreightS.find().lean<FreightI>()
     

    return res.status(200).json(freights)
  } catch (error) {
    return res.status(500).json({ message: 'error', success: false })
  }
})

export default userRoutes