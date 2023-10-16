import * as crypto from 'crypto';

export class HMACGenerator {
  static generateHMAC(clientKey: string, message: string): string {
    return crypto.createHmac('sha256', clientKey).update(message).digest('hex');
  }
}
