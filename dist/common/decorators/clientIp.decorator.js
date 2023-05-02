"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClientIP = void 0;
const common_1 = require("@nestjs/common");
exports.ClientIP = (0, common_1.createParamDecorator)((_, ctx) => {
    const request = ctx.switchToHttp().getRequest();
    const clientIp = request.headers['x-forwarded-for'] || request.socket.remoteAddress;
    return clientIp;
});
//# sourceMappingURL=clientIp.decorator.js.map