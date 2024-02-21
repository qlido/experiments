import { Injectable } from '@nestjs/common';
import { CreateTypeOrmDto } from './dto/create-type-orm.dto';
import { UpdateTypeOrmDto } from './dto/update-type-orm.dto';
import { TypeOrm } from './entities/type-orm.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class TypeOrmService {
  constructor(
    @InjectRepository(TypeOrm)
    private readonly ORMRepository: Repository<TypeOrm>,
  ) {}

  create(dto) {
    for (let i = 0; i < dto.time; i++) {
      console.log(i);
      this.ORMRepository.save({ name: dto.name, ORMType: 'typeorm' });
    }
    return dto.time;
  }

  findAll() {
    return `This action returns all typeOrm`;
  }

  findOne(id: number) {
    return `This action returns a #${id} typeOrm`;
  }

  update(id: number, updateTypeOrmDto: UpdateTypeOrmDto) {
    return `This action updates a #${id} typeOrm`;
  }

  remove(id: number) {
    return `This action removes a #${id} typeOrm`;
  }
}
