import { InputType, Field } from "@nestjs/graphql";
import { JokeCategoryEnum } from "../enums/joke-category.enum";
import { JokeTypeEnum } from "../enums/joke-type.enum";

@InputType('JokeTypeInput')
export class JokeTypeInput{
    @Field(() => JokeCategoryEnum, {nullable: true})
    category?: JokeCategoryEnum

    @Field(() => JokeTypeEnum, {nullable: true})
    type?: JokeTypeEnum
}