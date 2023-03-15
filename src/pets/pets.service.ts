import { Injectable } from '@nestjs/common';
import { Owner } from 'src/owners/entities/owner.entity';
import { OwnersService } from 'src/owners/owners.service';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreatePetInput } from './dto/create-pet-input';
import { Pet } from './pet.entity';

@Injectable()
export class PetsService {
  constructor(
    private prisma: PrismaService,
    private ownersService: OwnersService,
  ) {}

  async listPets(): Promise<Pet[] | null> {
    return await this.prisma.pet.findMany({
      include: {
        owner: true,
      },
    });
  }

  async createPet(createPetInput: CreatePetInput): Promise<Pet> {
    let newPet = await this.prisma.pet.create({
      data: createPetInput,
    });

    return newPet;
  }

  async findPetById(id: number): Promise<Pet | null> {
    return await this.prisma.pet.findUnique({
      where: {
        id,
      },
    });
  }

  async findPetOwnerByOwnerId(ownerId: number): Promise<Owner> {
    return await this.ownersService.findOwnerById(ownerId);
  }
}
