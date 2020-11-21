import { createParamDecorator, ExecutionContext } from '@nestjs/common';

export const GetUser = createParamDecorator(
  (data: unknown, ctx: ExecutionContext) => {
    const request = ctx.switchToHttp().getRequest();
    return request.user;
  },
);

export const GetRequest = createParamDecorator((data: string, req) => {
  return data ? req.params && req.params[data] : req.params.requestId;
});
