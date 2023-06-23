import { BadRequestException, Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { AxiosResponse } from 'axios';

import { JokeDto } from './dto/joke.dto';
import { CategoriesEnum } from './enums/joke-categories.enum';
import { JokeType } from './qraphql/types/joke-full.type';
import { JokeTypeInput } from './qraphql/inputs/joke.input';

@Injectable()
export class JokeService {
    constructor(
      private readonly httpService: HttpService
      ) {}

    async getJokeGQL(): Promise<AxiosResponse<JokeType>>{
      const jokeResult = this.httpService.axiosRef.get<JokeType>(`https://v2.jokeapi.dev/joke/Any`);
  
      return jokeResult;
    }

    async getTypeJokeGQL(input: JokeTypeInput): Promise<AxiosResponse<JokeType>>{
      const category = input.category !== undefined ? input.category : 'Any';
      const type = input.type !== undefined ? `?type=${input.type}` : '';

      console.log(`https://v2.jokeapi.dev/joke/${category}${type}`);

      const jokeResult = this.httpService.axiosRef.get<JokeType>(`https://v2.jokeapi.dev/joke/${category}${type}`);
  
      return jokeResult;
    }

    async getAsyncJoke(): Promise<AxiosResponse<JokeDto>>{

      const startTime = performance.now();

      const jokeResult = this.httpService.axiosRef.get('https://v2.jokeapi.dev/joke/Any');

      const endTime = performance.now();
      const totalTime = endTime - startTime;
      console.log(`getAsyncJoke total time: ${totalTime}`);

      return jokeResult;
    }

    getThenJoke(): Promise<AxiosResponse<JokeDto>>{
      const jokeResult = this.httpService.axiosRef.get<JokeDto>(`https://v2.jokeapi.dev/joke/Any`);

      return jokeResult.then((joke) => {
        if(joke.data.error === false){
          console.log(`then successful`);
          return jokeResult;
        }
        else{
          console.log(`then fail`);
          throw new BadRequestException(`Joke not found`);
        }
      })
      .catch(() => {
        console.log(`then catch`);
        throw new BadRequestException(`Joke not found`);
      });
    }

    async getCategoryJoke(categoriesEnum: CategoriesEnum): Promise<AxiosResponse<JokeDto>>{
      const jokeResult = this.httpService.axiosRef.get(`https://v2.jokeapi.dev/joke/${categoriesEnum}`);

      return jokeResult;
    }

    async getFromBody(jokeDto: JokeDto): Promise<AxiosResponse<JokeDto>>{
      const jokeResult = this.httpService.axiosRef.get<JokeDto>(`https://v2.jokeapi.dev/joke/${jokeDto.category}?type=${jokeDto.type}`);

      return jokeResult  
    }
    
    getFromThen(jokeDto: JokeDto): Promise<AxiosResponse<JokeDto>>{
      const jokeResult = this.httpService.axiosRef.get<JokeDto>(`https://v2.jokeapi.dev/joke/${jokeDto.category}?type=${jokeDto.type}`);

      return jokeResult.then((joke) => {
        if(joke.data.error === false){
          console.log(`then successful`);
          return jokeResult;
        }
        else{
          console.log(`then fail`);
          throw new BadRequestException(`Joke not found`);
        }
      });
    }

    async getFromType(type?: JokeDto['type']): Promise<AxiosResponse<JokeDto>>{
      console.log(`type: ${type}`);

      const jokeResult = this.httpService.axiosRef.get(`https://v2.jokeapi.dev/joke/Any?type=${type}`);
      
      return jokeResult  
    }
}
