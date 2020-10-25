
import { Response, Router } from 'express'
import UserPublicCtrl from '../controllers/UserPublicCtrl'
import { BadRequest } from '../erros/Exceptions'
import { User } from '../models/User'

const UserPublicRoutes = Router()

UserPublicRoutes.post('/login', async (req, res): Promise<Response> => {
  try {
    const data = await UserPublicCtrl.login(req.body as User)
    return res.status(200).json(data)
  } catch (e) {
    if (e instanceof BadRequest) {
      return res.status(400).json(e)
    }
    return res.status(500).json({ message: 'Desculpe, serviço indisponível no momento, tente mais tarde!' })
  }
})

export default UserPublicRoutes
