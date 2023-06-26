import { ObjectType, Field } from '@nestjs/graphql';

@ObjectType('User')
export class User {
  @Field(() => String)
  id: string

  @Field(() => String)
  username: string
}
