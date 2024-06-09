import { MessagesModule } from './messages/messages.module';
import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';

async function bootstrap() {
  const app = await NestFactory.create(MessagesModule);
  // validate all incoming request  that come to our  application
  app.useGlobalPipes(new ValidationPipe());
  await app.listen(3000);
}
bootstrap();
