export class ValidationError extends Error {
  public name: string;
  public status: number;

  constructor(msg) {
    super(msg);
    this.name = 'ValidationError';
    this.status = 400;
  }
}

export class ArrayValidationError extends Error {
  public name: string;
  public status: number;
  public errors: { message: string }[];

  constructor(msg, errors) {
    super(msg);
    this.name = 'ArrayValidationError';
    this.status = 400;
    this.errors = errors.map((error) => ({ message: error.message }));
  }
}

export class NotFoundError extends Error {
  public name: string;
  public status: number;

  constructor(msg) {
    super(msg);
    this.name = 'NotFoundError';
    this.status = 404;
  }
}

export class ServerError extends Error {
  public name: string;
  public status: number;

  constructor(msg) {
    super(msg);
    this.name = 'ServerError';
    this.status = 500;
  }
}
