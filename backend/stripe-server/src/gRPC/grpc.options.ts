import { join } from 'path';
import { ClientOptions, Transport } from '@nestjs/microservices';
import 'dotenv/config';

export const microserviceOptions: ClientOptions = {
  transport: Transport.GRPC,
  options: {
    package: 'payment',
    protoPath: join(__dirname, './payment.proto'),
    url: process.env.PAYMENT_GRPC,
  },
};
