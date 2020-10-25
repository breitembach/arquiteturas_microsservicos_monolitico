export enum StatusFreightEnum {
  ACEITO = 'aceito',
  ANDAMENTO = 'andamento',
  PENDENTE = 'pendente',
  EXPIRADO = 'expirado',
  FINISHED = 'finalizado'
}

export enum StatusUserEnum {
  ATIVO = 'Ativo',
  PENDENTE = 'Pendente',
  BLOQUEADO = 'Bloqueado',
}

export enum ScopedEnum {
  MOTORIST,
  USER
}

export enum TypeBrandEnum {
  VISA = 'Visa',
  MASTER = 'Master',
  AMEX = 'Amex',
  ELO = 'Elo',
  AURA = 'Aura',
  JCB = 'JCB',
  DINERS = 'Diners',
  DISCOVER = 'Discover',
  HIPERCARD = 'Hipercard'
}

export enum TypeCreditCardEnum {
  CREDITO = 'Credito',
  DEBITO = 'Debito',
  MULTIPLO = 'Multiplo'
}

export enum TypePaymentEnum {
  CREDITCARD = 'CreditCard'
}

export enum TypeFreight {
  NORMAL = 'CargaNormal',
  CARGAFECHADA = 'CargaFechada',
  CARGAFRACIONADA = 'CargaFracionada'
}

export enum ETypeWeight {
  KG = 'Kg',
  TON = 'Ton',
}
