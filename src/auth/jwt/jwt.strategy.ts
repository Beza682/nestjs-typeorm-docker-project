import { Injectable } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { ExtractJwt, Strategy } from "passport-jwt";
import { ConfigService } from "@nestjs/config";


@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy){
    constructor(private readonly configService: ConfigService) {
        super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            ignoreExpiration: false,
            secretOrKey: 'process.env.JWT_SECRET', //TODO configService.get<string>('JWT_SECRET') and process.env.JWT_SECRET not working 
            logging: true
        });
    }

    async validate(payload: any){
        return {userId: payload.sub, username: payload.username}
    }
}