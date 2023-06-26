import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { UsersService } from './users.service';
import { UsersResolver } from './users.resolver';
import { RegTestEntity } from '../database/entities/test-reg.entity';

@Module({
  imports: [TypeOrmModule.forFeature([RegTestEntity])],
  providers: [UsersResolver, UsersService],
  exports: [UsersService]
})
export class UsersModule {}
