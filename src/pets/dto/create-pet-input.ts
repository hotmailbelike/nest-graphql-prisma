import { Field, InputType, Int } from '@nestjs/graphql';
import { IsAlphanumeric, IsNotEmpty } from 'class-validator';

@InputType()
export class CreatePetInput {
  @IsAlphanumeric()
  @IsNotEmpty()
  @Field()
  name: string;

  @Field({ nullable: true })
  type?: string;

  @IsNotEmpty()
  @Field((type) => Int)
  ownerId: number;
}
