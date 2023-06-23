import { Test, TestingModule } from '@nestjs/testing';
import { HttpModule } from '@nestjs/axios';

import { JokeService } from './joke.service';

describe('JokeService', () => {
  let service: JokeService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [HttpModule],
      providers: [JokeService],
    }).compile();

    service = module.get<JokeService>(JokeService);
  });

  it('Sevice test for getAsyncJoke', () => {
    expect(service.getAsyncJoke()).toBeDefined();
  });
});
