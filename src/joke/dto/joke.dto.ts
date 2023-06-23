import { IsString,
         IsNotEmpty, 
         IsEnum,
         IsOptional, 
         IsBoolean} from "class-validator";

import { JokeFlagsDto } from "./joke-flags.dto";

export class JokeDto{
    @IsBoolean()
    @IsOptional()
    error?: boolean

    @IsString()
    @IsNotEmpty()
    category: string

    @IsEnum(['single', 'twopart'], {message: 'Use "single" or "twopart" in type!'})
    @IsOptional()
    type?: 'single' | 'twopart'

    @IsString()
    @IsOptional()
    joke?: string

    @IsString()
    @IsOptional()
    setup?: string

    @IsString()
    @IsOptional()
    delivery?: string

    @IsOptional()
    flags?: JokeFlagsDto
}