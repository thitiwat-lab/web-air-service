import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { HttpExceptionFilter } from './filters/http-exception.filter'
import * as express from 'express'
import { join } from 'path';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // app.use('/upload/file/news', express.static(join(__dirname, '..', './upload')));
  // app.use('/upload/file', express.static(join(__dirname, '..', './upload')));
  app.enableCors()
  app.useGlobalFilters(new HttpExceptionFilter())
  // app.setGlobalPrefix('/api')
  await app.listen(3001);
}
bootstrap();
