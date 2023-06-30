import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { ValidationPipe } from '@nestjs/common';

import { LoginResponse } from './types/login-response.type';
import { AuthService } from './auth.service';
import { LoginUserInput } from './inputs/login-user.input';
import { CreateUserInput } from '../users/qraphql/inputs/create-user.input';

@Resolver()
export class AuthResolver {
    constructor(private readonly authService: AuthService){}

    @Mutation(() => LoginResponse)
    login(@Args('loginUserInput') loginUserInput: LoginUserInput){
        return this.authService.login(loginUserInput);
    }

    @Mutation(() => LoginResponse)
    signup(@Args('createUserInput') createUserInput: CreateUserInput){
        return this.authService.create(createUserInput);
    }
}