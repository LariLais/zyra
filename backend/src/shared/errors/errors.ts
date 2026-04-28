export class Errors extends Error {
  public readonly statusCode: number;
  public readonly message: string;
  public readonly details?: unknown;

  constructor(statusCode: number, message: string, details?: unknown) {
    super(message);

    this.statusCode = statusCode;
    this.message = message;
    this.details = details;
    Error.captureStackTrace(this, this.constructor);
  }

  toJSON() {
    return {
      status: "error",
      statusCode: this.statusCode,
      message: this.message,
      ...(this.details ? { details: this.details } : {}),
    };
  }
}
