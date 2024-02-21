import { Module } from '@nestjs/common';
import { TypeOrmService } from './type-orm.service';
import { TypeOrmController } from './type-orm.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TypeOrm } from './entities/type-orm.entity';

@Module({
  imports: [TypeOrmModule.forFeature([TypeOrm])],
  controllers: [TypeOrmController],
  providers: [TypeOrmService],
})
export class TypeOrmssModule {}
