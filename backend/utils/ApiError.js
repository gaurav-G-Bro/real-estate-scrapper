class ApiError extends Error {
  constructor(statusCode = 500, message, data = null, errors = [], stack) {
    super(message);
    this.statusCode = statusCode;
    this.data = data;
    this.errors = errors;

    if (stack) {
      this.stack = stack;
    } else {
      Error.captureStackTrace(this, this.constructor);
    }
  }
}

export { ApiError };
