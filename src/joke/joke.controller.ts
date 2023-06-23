import {
  Controller,
  ValidationPipe,
  Get,
  Param,
  Body,
  Query,
  BadRequestException,
} from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { firstValueFrom } from 'rxjs';
import { AxiosResponse } from 'axios';

import { JokeDto } from './dto/joke.dto';
import { JokeService } from './joke.service';
import { CategoriesEnum } from './enums/joke-categories.enum';

@Controller('joke')
export class JokeController {
  constructor(
    private readonly httpService: HttpService,
    private readonly jokeService: JokeService,
  ) {}

  @Get('test')
  async getTestJoke() {
    const startTime = performance.now();

    const response = await firstValueFrom<AxiosResponse<JokeDto>>(
      this.httpService.get('https://v2.jokeapi.dev/joke/Any?type=twopart'),
    );

    const endTime = performance.now();
    const totalTime = endTime - startTime;
    console.log(`getTestJoke`);
    console.log(`Total time: ${totalTime}`);

    return `setup:\n${response.data.setup}\n\ndelivery:\n${response.data.delivery}`;
  }

  @Get('asyncJoke')
  async getAsyncJoke() {
    const response = await this.jokeService.getAsyncJoke();
    
    console.log(`getAsyncJoke`);

    return response.data;
  }

  @Get('asyncJoke/:num')
  async getPromiseJoke(@Param('num', ValidationPipe) num: number) {
    const startTime = performance.now();

    const arr = [];
    for (let i = 0; i < num; i++) {
      arr[i] = this.jokeService.getAsyncJoke();
    }

    const promises = await Promise.all(arr);
    console.log(`getPromiseJoke`);

    const endTime = performance.now();
    const totalTime = endTime - startTime;

    return `Promise.all total time ${totalTime}`;
  }

  @Get('thenJoke')
  getThenJoke(){
    return this.jokeService
      .getThenJoke()
      .then((jokeDto) => {
        console.log(`thenJoke true`);
        return jokeDto.data;
      })
      .catch(() => {
        console.log(`thenJoke false`);
        throw new BadRequestException(`Joke not found`);
      });
  }

  @Get('thenJoke/:num')
  getCycleJoke(@Param('num', ValidationPipe) num: number){
    const startTime = performance.now();
    
    for (let i = 0; i < num; i++) {
      this.jokeService
      .getThenJoke()
      .then((jokeDto) => {
        console.log(`thenJoke true`);
        return jokeDto.data;
      })
      .catch(() => {
        console.log(`thenJoke false`);
        throw new BadRequestException(`Joke not found`);
      });
    }
    console.log(`getCycleJoke`);

    const endTime = performance.now();
    const totalTime = endTime - startTime;

    return `Cycle total time ${totalTime}`;
  }
  
  @Get('query')
  async getFromType(@Query('type') type: JokeDto['type']) {
    const response = await this.jokeService.getFromType(type);

    console.log(`getFromType`);

    return response.data;
  }

  @Get('then')
  getBodyThen(@Body(ValidationPipe) jokeDto: JokeDto) {
    return this.jokeService
      .getFromThen(jokeDto)
      .then((jokeDto) => {
        console.log(`then true`);
        return jokeDto.data;
      })
      .catch(() => {
        console.log(`then false`);
        throw new BadRequestException(`Joke not found`);
      });
  }

  @Get(':category')
  async getJoke(@Param('category', ValidationPipe) category: CategoriesEnum) {
    const response = await this.jokeService.getCategoryJoke(category);

    console.log(`Param`);

    return response;
  }

  @Get()
  async getFromBody(@Body(ValidationPipe) jokeDto: JokeDto) {
    const response = await this.jokeService.getFromBody(jokeDto);

    console.log(`Body`);

    return response.data;
  }
}
