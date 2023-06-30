import { BadRequestException, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { LoginUserInput } from './inputs/login-user.input';
import { RegTestEntity } from '../database/entities/test-reg.entity';
import { CreateUserInput } from '../users/qraphql/inputs/create-user.input';
import { LoginResponse } from './types/login-response.type';
import { comparePassword, encodePassword } from '../utils/bcrypt';

@Injectable()
export class AuthService {
    constructor(
        @InjectRepository(RegTestEntity) private userRepsitory: Repository<RegTestEntity>,
        private readonly jwtService: JwtService
        ){}

    async login(logerUserInput: LoginUserInput) : Promise<LoginResponse>{
        const foundUser = await this.userRepsitory.findOne({where: {username: logerUserInput.username}});

        if(!foundUser){
            throw new BadRequestException(
                `Wrong username or password`
            )
        }

        const passwordMatch = await comparePassword(logerUserInput.password, foundUser.password)

        if(!passwordMatch){
            throw new BadRequestException(
                `Wrong username or password`
            )
        }

        return {
            access_token:  this.jwtService.sign({
                username: foundUser.username,
                sub: foundUser.id
            }),
            user: foundUser
        } 
    }

    async create(userInput: CreateUserInput): Promise<LoginResponse>{
        const findUser = await this.userRepsitory.findOne({where: {username: userInput.username}});
        if(findUser){
            throw new BadRequestException(
                `User "${findUser.username}" already exist`
            )
        }

        const password = await encodePassword(userInput.password);
        const newUser = await this.userRepsitory.create({ ...userInput, password });

        const user = await this.userRepsitory.save(newUser);
  
        return{
            access_token:  this.jwtService.sign({
                username: user.username,
                sub: user.id
            }),
            user: user
        } 
    }
}
