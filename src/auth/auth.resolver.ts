import { Args, Mutation, Resolver } from '@nestjs/graphql';

import { LoginResponse } from './types/login-response.type';
import { AuthService } from './auth.service';
import { LoginUserInput } from './inputs/login-user.input';

@Resolver()
export class AuthResolver {
    constructor(private readonly authService: AuthService){}

    @Mutation(() => LoginResponse)
    login(@Args('loginUserInput') loginUserInput: LoginUserInput){
        return this.authService.login(loginUserInput);
    }
}


