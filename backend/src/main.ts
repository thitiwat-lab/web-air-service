import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { HttpExceptionFilter } from './filters/http-exception.filter'
import * as express from 'express'
import { join } from 'path';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use('/files', express.static(join(__dirname, '..', 'client')));
  app.enableCors()
  app.useGlobalFilters(new HttpExceptionFilter())
  app.listen(3001);
}
bootstrap();
