import { Response, Router, Request } from 'express'
import { FreightS } from '../schemas/Freight'

const MotoristRoutes = Router()

MotoristRoutes.get('/fretes', async (req: Request, res): Promise<Response> => {

  try { 
    const { sort, limit, skip, ...where } = req.query as any
    const freights = await FreightS.find({
     
    })
    .limit(10)
      .lean()

    return res.status(200).json(freights)
  } catch (e) {
    return res.status(500).json({ details: e, success: false })
  }
})



export default MotoristRoutes
