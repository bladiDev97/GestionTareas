import { Module } from '@nestjs/common';
import { UserController } from './users/user.controller';
import { UserService } from './users/user.service';
import { ConfigModule } from '@nestjs/config';
import { UserRepository } from './users/user.repository';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: ['apps/users/.env'],
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
  controllers: [UserController],
  providers: [UserService, UserRepository],
})
export class UserModule {}
