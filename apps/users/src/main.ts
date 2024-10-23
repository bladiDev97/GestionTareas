import { NestFactory } from '@nestjs/core';
import { Transport } from '@nestjs/microservices';
import { Queues } from '@app/shared';
import { UserModule } from './user.module';

async function bootstrap() {
  const app = await NestFactory.createMicroservice(UserModule, {
    transport: Transport.RMQ,
    options: {
      urls: [process.env.AMQP_URL],
      queue: Queues.User,
    }
  });
  await app.listen();
}
bootstrap();
