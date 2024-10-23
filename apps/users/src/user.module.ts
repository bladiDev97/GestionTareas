import { Module } from '@nestjs/common';
import { UserController } from './users/user.controller';
import { UserService } from './users/user.service';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: ['apps/users/.env'],
      isGlobal: true,
    }),
  ],
  controllers: [UserController],
  providers: [UserService],
})
export class UserModule {}
