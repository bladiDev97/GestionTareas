import { NestFactory } from '@nestjs/core';
import { Transport } from '@nestjs/microservices';
import { Queues } from '@app/shared';
import { UserModule } from './user.module';

async function bootstrap() {
  const app = await NestFactory.createMicroservice(UserModule, {
    transport: Transport.RMQ,
    options: {
      urls: [`amqp://${process.env.AMQP_USER}:${process.env.AMQP_PSWD}@${process.env.AMQP_HOST}:${process.env.AMQP_PORT}`],
      queue: Queues.User,
    }
  });
  await app.listen();
}
bootstrap();
