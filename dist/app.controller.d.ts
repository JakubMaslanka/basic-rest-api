import { AppService } from './app.service';
export declare class AppController {
    private readonly appService;
    constructor(appService: AppService);
    getStatus(clientIp: string): {
        ip: string;
        status: string;
        version: any;
    };
}
