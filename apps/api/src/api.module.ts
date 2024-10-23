import { Module } from '@nestjs/common';
import { ApiUserController } from './api-users/api-user.controller';
import { ApiTaskController } from './api-tasks/api-task.controller';
import { ConfigModule } from '@nestjs/config';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { Queues } from '@app/shared';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: ['.env'],
      isGlobal: true,
    }),
    ClientsModule.register([
      {
        name: Queues.User,
        transport: Transport.RMQ,
        options: {
          urls: [process.env.AMQP_URL],
          queue: Queues.User,
        }
      },
      {
        name: Queues.Task,
        transport: Transport.RMQ,
        options: {
          urls: [process.env.AMQP_URL],
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
