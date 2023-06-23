import { Test, TestingModule } from '@nestjs/testing';
import { HttpModule } from '@nestjs/axios';

import { JokeController } from './joke.controller';
import { JokeService } from './joke.service';
import { JokeDto } from './dto/joke.dto';

describe('JokeController', () => {
  let controller: JokeController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [HttpModule],
      controllers: [JokeController],
      providers: [JokeService]
    }).compile();

    controller = module.get<JokeController>(JokeController);
  });

  it('Controller test for getPromiseJoke', () => {
    // const test = new JokeDto();
    // test.category = "ANY";
    // test.type = "single";

    // expect(controller.getAsyncJoke()).toBeDefined();
    // expect(controller.getFromBody(test)).toBeDefined();


    expect(controller.getPromiseJoke(30)).toBeDefined()
  });

  it('Controller test for getCycleJoke', () => {
    expect(controller.getCycleJoke(30)).toBeDefined()
  });
});
