import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { Request } from 'express';

export const ClientIP = createParamDecorator(
  (_: unknown, ctx: ExecutionContext) => {
    const request: Request = ctx.switchToHttp().getRequest();
    const clientIp =
      request.headers['x-forwarded-for'] || request.socket.remoteAddress;
    return clientIp;
  },
);
