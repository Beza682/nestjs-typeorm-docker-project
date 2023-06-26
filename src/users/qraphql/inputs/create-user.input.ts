import { InputType, Int, Field } from '@nestjs/graphql';
import { Min } from 'class-validator';

@InputType()
export class CreateUserInput {
  @Field()
  username: string

  @Field()
  @Min(8, { message: `Password must be longer than 8 characters`})
  password: string
}
