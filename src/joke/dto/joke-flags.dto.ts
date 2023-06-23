import { IsBoolean, IsOptional } from "class-validator";

export class JokeFlagsDto{
    @IsBoolean()
    nsfw:  boolean

    @IsBoolean()
    religious: boolean

    @IsBoolean()
    political: boolean

    @IsBoolean()
    racist: boolean

    @IsBoolean()    
    sexist: boolean

    @IsBoolean()
    explicit: boolean
}