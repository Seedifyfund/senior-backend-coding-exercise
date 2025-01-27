import { Module } from '@nestjs/common';
import { UsersController } from './application /controllers/users.controller';
import { UsersService } from './domain/services/users.service';
import { UserRepositoryService } from './infrastructure/repositories/user-repository.service';

@Module({
  controllers: [UsersController],
  providers: [UsersService, UserRepositoryService],
})
export class UsersModule {}
