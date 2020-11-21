import { createParamDecorator } from '@nestjs/common';

export const Admin = createParamDecorator((data: string, req) => {
  return data ? req.user && req.user[data] : req.user;
});

export const User = createParamDecorator((data: string, req) => {
  return data ? req.user && req.user[data] : req.user;
});
