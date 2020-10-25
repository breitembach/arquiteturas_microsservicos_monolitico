import cors from 'cors'
import express from 'express'
import helmet from 'helmet'
import morgan from 'morgan'
import AppConfig from './AppConfig'
import MotoristRoutes from './routes/MotoristRoutes'
import userRoutes from './routes/UserRoutes'
import ConnectionMongoDB from './database'

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
    this.express.use(`/motoristas`, MotoristRoutes)
    this.express.use(`/clientes`, userRoutes)

  }

  private initEnviroment (): void {
    console.log('Starting MODE: ' + process.env.NODE_ENV)
  }
}

export default new App().express
