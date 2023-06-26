import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { RegTestEntity } from '../database/entities/test-reg.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(RegTestEntity) private userRepsitory: Repository<RegTestEntity>
    ){}

  findAll() {
    return this.userRepsitory.find();
  }

  findOne(username: string) {
    return this.userRepsitory.findOneBy({username});
  }
}
