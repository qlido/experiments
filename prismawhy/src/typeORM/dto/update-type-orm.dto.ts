import { PartialType } from '@nestjs/mapped-types';
import { CreateTypeOrmDto } from './create-type-orm.dto';

export class UpdateTypeOrmDto extends PartialType(CreateTypeOrmDto) {}
