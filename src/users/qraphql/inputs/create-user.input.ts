import { InputType, Field } from '@nestjs/graphql';
import { IsNotEmpty, IsString, Length } from 'class-validator';

@InputType()
export class CreateUserInput {
  @Field()
  @IsNotEmpty()
  @IsString()
  username: string

  @Field()
  @IsNotEmpty()
  @IsString()
  @Length(8, 20, { message: `Password must be longer than 8 characters and no more than 20 characters`})
  password: string
}
