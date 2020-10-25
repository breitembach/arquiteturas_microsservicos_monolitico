
export const getCentavos = (amount:number):number => {
  if (amount < 1) {
    throw new Error('Quantidade é menor que 0')
  }
  if (amount === 0) {
    return amount
  }
  console.log('REAL É', amount)
  return amount * 100
}

export const getReal = (amount:number):number => {
  if (amount < 0) {
    throw new Error('Quantidade é menor que 0')
  }
  if (amount === 0) {
    return amount
  }
  return amount / 100
}
