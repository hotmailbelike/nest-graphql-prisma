import { Module } from '@nestjs/common';
import { PetsService } from './pets.service';
import { PetsResolver } from './pets.resolver';
import { PrismaService } from 'src/prisma/prisma.service';
import { OwnersService } from 'src/owners/owners.service';

@Module({
  providers: [PetsService, PetsResolver, PrismaService, OwnersService],
})
export class PetsModule {}
