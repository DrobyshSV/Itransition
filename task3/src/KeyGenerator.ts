import crypto from 'crypto';

export class KeyGenerator {
  static generateKey(length: number) {
    return crypto.randomBytes(length/8).toString('hex');
  }
}
