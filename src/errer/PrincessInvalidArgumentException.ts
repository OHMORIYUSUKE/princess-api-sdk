import { PrincessException } from './PrincessException';

export class PrincessInvalidArgumentException extends PrincessException {
  constructor(public statusCode: number, e?: string) {
    super(e);
  }
}
