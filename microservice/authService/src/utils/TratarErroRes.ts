// import ApiResponse from '../models/ApiResponse'
import { BadRequest, Forbidden, Unauthorized } from '../erros/Exceptions'

import { Response, Request } from 'express'
import { TokenExpiredError, JsonWebTokenError } from 'jsonwebtoken'
import LogCtrl from '../controllers/LogCtrl'
import { Error as MongoError } from 'mongoose'
// BadRequest | Forbidden | Unauthorized | TokenExpiredError | JsonWebTokenError
export const TratarErrorRes = (req: Request | any, res: Response, err: any, objLog?: any): Response => {
  switch (err.constructor.name) {
    case BadRequest.name:
      return res.status(400).json({
        message: err.message,
        success: false,
        errors: err.errors
      })
    case MongoError.name:
    case MongoError.ValidatorError.name:
    case MongoError.ValidationError.name:
      return res.status(400).json({
        message: 'Todos os campos devem ser válidos' || err.message,
        success: false,
        errors: err.errors
      })
    case Forbidden.name:
      return res.status(401).json({
        message: err.message,
        success: false,
        errors: err.errors
      })
    case Unauthorized.name:
      return res.status(403).json({
        message: err.message,
        success: false,
        errors: err.errors
      })
    case TokenExpiredError.name:
      LogCtrl.logger.info(`${req.originalUrl} Token Expirado`, { objLog, error: err })
      return res.status(400).json({
        message: 'Código Expirado',
        success: false
      })
    case JsonWebTokenError.name:
      LogCtrl.logger.alert(`${req.originalUrl} jwt inválido`, { objLog, error: err })
      return res.status(400).json({
        message: 'Código Inválido',
        success: false
      })

    case Error.name:
      return
    default:
      LogCtrl.logger.error(`Erro generico nao tratado`, {
        error: err
      })
      console.log(typeof err)
      console.log(err.name == MongoError.name)
      console.log(err.constructor)
      return res.status(500).json({ message: 'Desculpe, tente mais tarde!!', success: false })
  }
}
