import { NestFactory } from '@nestjs/core';
import { PaymentModule } from './payment.module';
import 'dotenv/config';
import { Logger } from '@nestjs/common';
import { microserviceOptions } from './gRPC/grpc.options';

async function bootstrap() {
  const app = await NestFactory.createMicroservice(
    PaymentModule,
    microserviceOptions,
  );

  await app.listen(() =>
    Logger.log('[PAYMENT-MS] Payment Microservice Running.'),
  );
}
bootstrap();
