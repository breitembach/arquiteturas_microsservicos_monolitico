import AppConfig from './AppConfig'
import mongoose, { Mongoose } from 'mongoose'
import { Db } from 'mongodb'

class ConnectionMongoDB {
  public client?: Mongoose
  public db!: Db

  public async connect ():Promise<Mongoose> {
    if (AppConfig.API_ENVIROMENT === 'production') {
      this.client = await mongoose.connect(AppConfig.DB_URL,
        { useNewUrlParser: true, useCreateIndex: false, useFindAndModify: false, useUnifiedTopology: true })
    } else if (AppConfig.API_ENVIROMENT === 'development') {
      this.client = await mongoose.connect(AppConfig.DB_URL,
        { useNewUrlParser: true, useCreateIndex: true, useFindAndModify: false, useUnifiedTopology: true })
    }
    console.log('Starting DB: ' + AppConfig.DB_URL)
    this.db = this.client.connection.db

    return this.client

  }
}

export default new ConnectionMongoDB()
