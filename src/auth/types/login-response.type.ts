import { Field, ObjectType } from "@nestjs/graphql";
import { User } from "src/users/types/user.type";


@ObjectType()
export class LoginResponse{
    @Field()
    access_token: string

    @Field(() => User)
    user: User
}