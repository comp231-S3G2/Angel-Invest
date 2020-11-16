import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { NestExpressApplication } from '@nestjs/platform-express';
import { Logger, ValidationPipe, INestApplication } from '@nestjs/common';
import 'dotenv/config';
const port = process.env.PORT || 3001;

async function bootstrap() {
  const app: INestApplication = await NestFactory.create<
    NestExpressApplication
  >(AppModule);
  app.enableCors();
  app.useGlobalPipes(new ValidationPipe());
  await app.listen(port);
  Logger.log(`Server running on ${port}`, 'Bootstrap');
}
bootstrap();
