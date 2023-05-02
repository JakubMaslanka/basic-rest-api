import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { ClientIP } from './common/decorators/clientIp.decorator';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/health')
  getStatus(@ClientIP() clientIp: string) {
    const status = this.appService.getStatus();
    return { ...status, ip: clientIp };
  }
}
