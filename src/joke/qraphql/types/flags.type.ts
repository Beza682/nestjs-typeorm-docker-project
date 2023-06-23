import { Field, ObjectType } from "@nestjs/graphql";

@ObjectType('Flags')
export class FlagsType{
    @Field(() => Boolean)
    nsfw:  boolean

    @Field(() => Boolean)
    religious: boolean

    @Field(() => Boolean)
    political: boolean

    @Field(() => Boolean)
    racist: boolean

    @Field(() => Boolean)    
    sexist: boolean

    @Field(() => Boolean)
    explicit: boolean
}