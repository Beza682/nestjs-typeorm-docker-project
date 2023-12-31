import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport'
import { TypeOrmModule } from '@nestjs/typeorm';

import { AuthService } from './auth.service';
import { AuthResolver } from './auth.resolver';
import { JwtStrategy } from './jwt/jwt.strategy';
import { RegTestEntity } from '../database/entities/test-reg.entity';


@Module({
  imports: [
    TypeOrmModule.forFeature([RegTestEntity]),
    JwtModule.register( {
      signOptions: { expiresIn: '60s'},
       secret: 'process.env.JWT_SECRET' //TODO configService.get<string>('JWT_SECRET') and process.env.JWT_SECRET not working 
    }),
    PassportModule,
  ],
  providers: [AuthService, AuthResolver, JwtStrategy]
})
export class AuthModule {}
