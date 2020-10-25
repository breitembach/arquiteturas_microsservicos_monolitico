
export const generateCode4Digit = (): number => {
  return Math.floor(1000 + Math.random() * 8999)
}

export const generateCaracters = (length: number): string => {
  let result = ''
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
  const charactersLength = characters.length
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength))
  }
  return result
}

export const getMerchantOrderId = (sufix: string): string => {
  return new Date().getTime().toString() + sufix
}
