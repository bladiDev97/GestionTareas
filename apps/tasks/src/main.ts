import { NestFactory } from '@nestjs/core';
import { TasksModule } from './tasks.module';
import { Transport } from '@nestjs/microservices';
import { Queues } from '@app/shared';

async function bootstrap() {
  const app = await NestFactory.createMicroservice(TasksModule, {
    transport: Transport.RMQ,
    options: {
      urls: [process.env.AMQP_URL],
      queue: Queues.Task,
    }
  });
  await app.listen();
}
bootstrap();
