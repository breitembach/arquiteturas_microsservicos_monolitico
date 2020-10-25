import dotenv from 'dotenv'

if (process.env.NODE_ENV !== 'production') {
  dotenv.config()
}

export default {
  JWT_SECRET_MOTORIST: process.env.JWT_SECRET_MOTORIST,
  JWT_SECRET_USER: process.env.JWT_SECRET_USER,
  JWT_SECRET_RESET_PASSWORD: process.env.JWT_SECRET_RESET_PASSWORD,
  DB_URL: process.env.DB_URL,
  DB_NAME: process.env.DB_NAME,
  DB_USER: process.env.DB_USER,
  DB_PWD: process.env.DB_PWD,
  DB_HOST: process.env.DB_HOST,
  DB_PORT: process.env.DB_PORT,

  AWS_ACCESS_KEY_ID: process.env.AWS_ACCESS_KEY_ID,
  AWS_SECRET_ACCESS_KEY: process.env.AWS_SECRET_ACCESS_KEY,


  API_PORT: process.env.API_PORT,
  API_HOST: process.env.API_HOST,
  API_ENVIROMENT: process.env.NODE_ENV,

  PAGARME_API_KEY: process.env.PAGARME_API_KEY

}
