import ApiResponse from '../models/ApiResponse'

export class BadRequest extends ApiResponse {}

// export class ServerError extends Error {}

export class Forbidden extends ApiResponse {}

export class Unauthorized extends ApiResponse {}
