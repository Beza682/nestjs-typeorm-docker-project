import { Field, ObjectType, ID } from "@nestjs/graphql";
import { FlagsType } from "./flags.type";

@ObjectType('Joke')
export class JokeType{

    @Field(() => Boolean)
    error: boolean

    @Field()
    category: string

    @Field()
    type: string

    @Field({nullable: true})
    joke?: string

    @Field({nullable: true})
    setup?: string

    @Field({nullable: true})
    delivery?: string

    @Field(() => FlagsType)
    flags: FlagsType

    @Field(() => Boolean)
    safe: boolean

    @Field(type => ID)
    id: number

    @Field()
    lang: string
}