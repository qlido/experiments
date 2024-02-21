import { Injectable } from '@nestjs/common';
import { UpdatePrismaDto } from './dto/update-prisma.dto';
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();
@Injectable()
export class PrismaService {
  create(dto) {
    for (let i = 0; i < dto.time; i++) {
      console.log(i);
      prisma.prisma.create({
        data: {
          name: dto.name,
          ORMType: 'prisma',
        },
      });
    }
    return dto.time;
  }

  findAll() {
    return `This action returns all prisma`;
  }

  findOne(id: number) {
    return `This action returns a #${id} prisma`;
  }

  update(id: number, updatePrismaDto: UpdatePrismaDto) {
    return `This action updates a #${id} prisma`;
  }

  remove(id: number) {
    return `This action removes a #${id} prisma`;
  }
}
