export enum TypeVehicle {
  MOTOCYCLE = 'Motocicleta',
  CAR = 'Automovel',
  UTILITARIO = 'Utilitario',
  VAN = 'Van',
  HR = 'Hr',
  VUC = 'Vuc', // or 3/4
  TOCO = 'Toco', // or Semi Pesado
  TRUCK = 'Truck', // or 6x2
  CARRETA = 'Carreta',
  CARRETA_LS = 'CarretaLS',
  CARRETA_VANDERLEIA = 'Caminhao',
  BITREM = 'Bitrem',
  RONDOTREM = 'Rondotrem',
}


export enum TypeCacamba {
  /* 0 */BAU = 'Bau',
  /* 1 */CACAMBA = 'Cacamba',
  /* 2 */SIDER = 'Sider',
  /* 3 */GRANELEIRO = 'Graneleiro',
  /* 4 */GRADE_BAIXA = 'GradeBaixa'
}

export const TypeCacambaValues = ((): TypeCacamba[] => Object.values(TypeCacamba))()

export enum TypeDaily {
  MORNING = 'morning',
  EVENING = 'evening',
  DAILY = 'daily'
}
