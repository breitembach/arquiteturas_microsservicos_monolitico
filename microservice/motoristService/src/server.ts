import app from './app'
import AppConfig from './AppConfig'


app.listen(AppConfig.API_PORT, (): void => {
  console.log('\x1b[33m', 'server Running: ', AppConfig.API_HOST, ':', AppConfig.API_PORT, '\x1b[0m')
})
