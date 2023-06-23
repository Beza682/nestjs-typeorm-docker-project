import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

import { UsersService } from '../users/users.service';
import { User } from '../users/types/user.type';
import { LoginUserInput } from './inputs/login-user.input';

@Injectable()
export class AuthService {
    constructor(
        private readonly usersService: UsersService,
        private readonly jwtService: JwtService
        ){}
    
    async validateUser(username: string, password: string): Promise<any>{
        const user = await this.usersService.findOne(username);
        if(user && user.password === password){
            const { password, ...result} = user;
            return user;
        }
        return undefined;
    }

    async login(logerUserInput: LoginUserInput){
        const user = await this.usersService.findOne(logerUserInput.username);

        const { password, ...result} = user;

        return{
            access_token:  this.jwtService.sign({
                username: user.username,
                sub: user.id
            }),
            user: user
        } 
    }

    async login2(user: User){
        console.log(user.username)

        return{
            access_token:  this.jwtService.sign({
                username: user.username,
                sub: user.id
            }),
            user
        } 
    }
}
