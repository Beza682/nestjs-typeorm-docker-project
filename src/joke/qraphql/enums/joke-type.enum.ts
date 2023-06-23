import { registerEnumType } from '@nestjs/graphql'

export enum JokeTypeEnum{
    SINGLE = "single",
    TWOPART = "twopart"
}

registerEnumType(JokeTypeEnum, {
    name: 'JokeTypeEnum'
})