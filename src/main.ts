import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      // DTOに宣言されているプロパティだけを後続処理に渡すことができる。
      whitelist: true
    })
  )
  await app.listen(3000);
}
bootstrap();
