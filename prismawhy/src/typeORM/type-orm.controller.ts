import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { TypeOrmService } from './type-orm.service';
import { CreateTypeOrmDto } from './dto/create-type-orm.dto';
import { UpdateTypeOrmDto } from './dto/update-type-orm.dto';

@Controller('type-orm')
export class TypeOrmController {
  constructor(private readonly typeOrmService: TypeOrmService) {}

  @Post()
  create(@Body() createTypeOrmDto: CreateTypeOrmDto) {
    console.time('typeORM');
    this.typeOrmService.create(createTypeOrmDto);
    console.timeEnd('typeORM');
  }

  @Get()
  findAll() {
    return this.typeOrmService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.typeOrmService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTypeOrmDto: UpdateTypeOrmDto) {
    return this.typeOrmService.update(+id, updateTypeOrmDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.typeOrmService.remove(+id);
  }
}
