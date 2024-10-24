import { Module } from '@nestjs/common';
import { TasksController } from './tasks/tasks.controller';
import { TasksService } from './tasks/tasks.service';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TaskRepository } from './tasks/tasks.repository';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: ['apps/tasks/.env'],
      isGlobal: true,
    }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST,
      username: process.env.DB_USER,
      password: process.env.DB_PSWD,
      database: process.env.DB_NAME,
      port: +process.env.DB_PORT,
      autoLoadEntities: true,
      synchronize: true,
      entities: [
        __dirname + '/**/*.entity.{js,ts}',
      ],
      logging: 'all',
    }),
  ],
  controllers: [TasksController],
  providers: [TasksService, TaskRepository],
})
export class TasksModule {}
