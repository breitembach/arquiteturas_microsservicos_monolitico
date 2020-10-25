import cors from 'cors'
import express from 'express'
import helmet from 'helmet'
import morgan from 'morgan'
import AppConfig from './AppConfig'

import UserPublicRoutes from './routes/UserPublicRoutes'
import ConnectionMongoDB from './database'
import { version } from '../package.json'

const V = version.split('.', 1)[0]

class App {
  public express: express.Application

  public constructor () {
    this.express = express()
    this.initEnviroment()
    this.middlewares()
    this.database()
  }

  private middlewares (): void {
    this.express.use(express.json())
    this.express.use(helmet())
    this.express.use(cors({}))

    if (AppConfig.API_ENVIROMENT === 'development') {
      this.express.use(morgan('dev'))
    }
  }

  private async database (): Promise<void> {
    try {
    
      await ConnectionMongoDB.connect()
      this.routes()

    } catch (error) {
      console.log(error)
    }
  }

  private routes (): void {
    this.express.use(UserPublicRoutes)

  }

  private initEnviroment (): void {
    console.log('Starting MODE: ' + process.env.NODE_ENV)
  }
}

export default new App().express
