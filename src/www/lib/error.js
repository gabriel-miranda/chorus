import HttpStatus from 'http-status-codes';

class ApiError {
  constructor(statusCode, message) {
    this.statusCode = statusCode;
    this.message = message;
  }
}

export class NotFoundError extends ApiError {
  constructor() {
    super(HttpStatus.NOT_FOUND, 'Resource not found');
  }
}

export function wrapErrorClientReadable(error) {
  return JSON.stringify(error);
}

export function handleClientError(error, ctx) {
  console.error(error);
  if (error.graphQLErrors) {
    error.graphQLErrors.forEach((e) => {
      const parsedError = JSON.parse(e.message);
      ctx.res.statusCode = parsedError.statusCode;
    });
  }
}
