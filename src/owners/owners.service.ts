import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateOwnerInput } from './dto/create-owner.input';
import { UpdateOwnerInput } from './dto/update-owner.input';

@Injectable()
export class OwnersService {
  constructor(private prisma: PrismaService) {
    this.prismaClient = prisma;
  }
  private prismaClient: PrismaClient;

  ownerModel() {
    return this.prismaClient.owner;
  }

  async createOwner(createOwnerInput: CreateOwnerInput) {
    let newOwner = await this.ownerModel().create({ data: createOwnerInput });

    return newOwner;
  }

  async listOwners() {
    return await this.ownerModel().findMany();
  }

  async findOwnerById(id: number) {
    return await this.ownerModel().findUnique({
      where: {
        id,
      },
    });
  }

  // update(id: number, updateOwnerInput: UpdateOwnerInput) {
  //   return `This action updates a #${id} owner`;
  // }

  // remove(id: number) {
  //   return `This action removes a #${id} owner`;
  // }
}
