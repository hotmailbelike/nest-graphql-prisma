import { Module } from '@nestjs/common';
import { OwnersService } from './owners.service';
import { OwnersResolver } from './owners.resolver';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  providers: [OwnersResolver, OwnersService, PrismaService],
  exports: [OwnersService],
})
export class OwnersModule {}
