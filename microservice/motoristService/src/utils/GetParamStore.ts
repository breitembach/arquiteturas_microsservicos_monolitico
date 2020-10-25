import { SSM } from 'aws-sdk'

const parameterStore = new SSM({
  region: 'sa-east-1'
})

export default (key: string): Promise<SSM.Parameter> => {
  return new Promise((resolve, reject): void => {
    parameterStore.getParameter({
      Name: key
    }, (err, data): void => {
      if (err) {
        return reject(err)
      }
      return resolve(data.Parameter)
    })
  })
}
