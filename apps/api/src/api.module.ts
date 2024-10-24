import { Module } from '@nestjs/common';
import { ApiUserController } from './api-users/api-user.controller';
import { ApiTaskController } from './api-tasks/api-task.controller';
import { ConfigModule } from '@nestjs/config';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { Queues } from '@app/shared';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: ['apps/api/.env'],
      isGlobal: true,
    }),
    ClientsModule.register([
      {
        name: Queues.User,
        transport: Transport.RMQ,
        options: {
          urls: [`amqp://${process.env.AMQP_USER}:${process.env.AMQP_PSWD}@${process.env.AMQP_HOST}:${process.env.AMQP_PORT}`],
          queue: Queues.User,
        }
      },
      {
        name: Queues.Task,
        transport: Transport.RMQ,
        options: {
          urls: [`amqp://${process.env.AMQP_USER}:${process.env.AMQP_PSWD}@${process.env.AMQP_HOST}:${process.env.AMQP_PORT}`],
          queue: Queues.Task,
        }
      },
    ]),
  ],
  controllers: [ApiUserController, ApiTaskController],
  providers: [
    
  ],
})
export class ApiModule {}
