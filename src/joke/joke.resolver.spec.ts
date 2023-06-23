import { Test, TestingModule } from '@nestjs/testing';
import { HttpModule } from '@nestjs/axios';

import { JokeResolver } from './joke.resolver';
import { JokeService } from './joke.service';

describe('JokeResolver', () => {
  let resolver: JokeResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [HttpModule],
      providers: [JokeService, JokeResolver],
    }).compile();

    resolver = module.get<JokeResolver>(JokeResolver);
  });

  it('should be defined', () => {
    expect(resolver.anyJoke()).toBeDefined();
  });
});
