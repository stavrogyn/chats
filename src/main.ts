import { NestFactory } from '@nestjs/core';
import { AppModule } from './modules';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(process.env.SERVER_PORT || 3000);
}
bootstrap();
