import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getStatus() {
    return {
      status: 'ok',
      // eslint-disable-next-line @typescript-eslint/no-var-requires
      version: require('../package.json').version,
    };
  }
}
