import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Pet } from 'src/pets/pet.entity';

@ObjectType()
export class Owner {
  @Field((type) => Int)
  id: number;

  @Field()
  name: string;

  @Field((type) => [Pet], { nullable: true })
  pets?: Pet[];
}
