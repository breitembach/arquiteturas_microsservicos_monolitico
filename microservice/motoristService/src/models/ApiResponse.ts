
export default class ApiResponse<T = {}> {
  public errors?: {[key: string]: any; }
  public data?: T;
  public success = false
  public message: string

  public constructor (init?:Partial<ApiResponse>) {
    Object.assign(this, init)
  }
}
