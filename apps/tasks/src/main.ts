import { NestFactory } from '@nestjs/core';
import { TasksModule } from './tasks.module';
import { Transport } from '@nestjs/microservices';
import { Queues } from '@app/shared';

async function bootstrap() {
  const app = await NestFactory.createMicroservice(TasksModule, {
    transport: Transport.RMQ,
    options: {
      urls: [`amqp://${process.env.AMQP_USER}:${process.env.AMQP_PSWD}@${process.env.AMQP_HOST}:${process.env.AMQP_PORT}`],
      queue: Queues.Task,
    }
  });
  await app.listen();
}
bootstrap();
