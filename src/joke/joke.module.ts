import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';

import { JokeService } from './joke.service';
import { JokeResolver } from './joke.resolver';
import { JokeController } from './joke.controller';

@Module({
  imports: [HttpModule],
  providers: [JokeService, JokeResolver],
  controllers: [JokeController]
})
export class JokeModule {}
