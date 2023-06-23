import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType('User')
export class User {
  @Field(() => Int)
  id: number

  @Field()
  username: string
}
