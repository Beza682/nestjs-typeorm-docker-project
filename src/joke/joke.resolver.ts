import { UseGuards } from '@nestjs/common';
import { Resolver, Query, Args } from '@nestjs/graphql';

import { JokeService } from './joke.service';
import { JokeType } from './qraphql/types/joke-full.type';
import { JokeTypeInput } from './qraphql/inputs/joke.input';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';

@Resolver(of => JokeType)
export class JokeResolver {
    constructor(private readonly jokeService: JokeService){}

    @Query(returns => JokeType)
    anyJoke(): Promise<JokeType>{
        return this.jokeService.getJokeGQL().then(joke => {
            return joke.data
        });
    }

    @Query(returns => JokeType)
    @UseGuards(JwtAuthGuard)
    typeJoke(@Args('input') input: JokeTypeInput): Promise<JokeType>{
        return this.jokeService.getTypeJokeGQL(input).then(joke => {
            return joke.data
        });
    }
}
