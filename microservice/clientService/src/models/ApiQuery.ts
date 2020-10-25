
export type CustomQuery<T> = T & QueryReq;

interface QueryReq {
  limit?: string
  skip?: string
  sort?: string
}

export interface ApiQuery<T = any> {
  limit?: number
  skip?: number
  sort?: string
  where?: T
  
}

export const createApiQuery = <T> (query: Partial<ApiQuery<T>> = { limit: 20, skip: 0, where: {} as T }): ApiQuery<T> => {
  if (!query.limit || query.limit > 20) query.limit = 20
  if (!query.skip) query.skip = 0
  console.log(query)
  return query
}

export const getLimit = (limit: string | number | undefined): number => {
  limit = parseInt(limit+'')
  if (!limit || limit > 200) {
    return 200
  } else {
    return limit
  }
}
