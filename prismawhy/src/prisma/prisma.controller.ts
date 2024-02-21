import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { PrismaService } from './prisma.service';
import { UpdatePrismaDto } from './dto/update-prisma.dto';

@Controller('prisma')
export class PrismaController {
  constructor(private readonly prismaService: PrismaService) {}

  @Post()
  create(@Body() dto: string) {
    console.time('prisma');
    this.prismaService.create(dto);
    console.timeEnd('prisma');
  }

  @Get()
  findAll() {
    return this.prismaService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.prismaService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePrismaDto: UpdatePrismaDto) {
    return this.prismaService.update(+id, updatePrismaDto);
  }
}
