
export default class ApiError extends Error {
  public errors: any[]
  public statusCode: number

  public constructor (init?:Partial<ApiError>) {
    super(init.message)
    Object.assign(this, init)
  }
}

