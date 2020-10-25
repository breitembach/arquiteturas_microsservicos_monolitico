import { UserS } from '../schemas/User'
import bcrypt from 'bcrypt'
import { ScopedEnum } from '../enuns/Enuns'
import AppConfig from '../AppConfig'
import { BadRequest } from '../erros/Exceptions'
import jwt from 'jsonwebtoken'
import { LoginRes } from '../models/Login'
import { User } from '../models/User'

export default {
  login: async (payload: User): Promise<LoginRes> => {
    if (!payload.email || !payload.password) throw new BadRequest({ message: 'Usuário e senha são Obrigatórios!' })
    const userDB = await UserS.findOne({ email: payload.email }).select('+password')
    if (!userDB) throw new BadRequest({ message: 'Usuário/senha inválidos' })
    const passIsValid: boolean = await bcrypt.compare(payload.password, userDB.password)
    if (!passIsValid) throw new BadRequest({ message: 'Usuário/senha inválidos' })
    const token = jwt.sign({ id: userDB._id, email: userDB.email, scoped: ScopedEnum.USER }, AppConfig.JWT_SECRET_USER, {
      expiresIn: '8h'
    })
    return {
      _id: userDB._id,
      token: token,
      urlPhoto: userDB.urlPhoto,
      email: userDB.email,
      fullName: userDB.fullName,
      displayName: userDB.displayName,
      status: userDB.status,
      scoped: ScopedEnum.USER
    }
  }
}
