import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { MyFilterFilter } from './todo/my-filter.filter';
import { MyFirstInterceptor } from './todo/my-interceptor.interceptor';


async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe());
  app.useGlobalFilters(new MyFilterFilter())
  app.useGlobalInterceptors(new MyFirstInterceptor())
  await app.listen(3000);
}
bootstrap();
