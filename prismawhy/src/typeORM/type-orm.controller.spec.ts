import { Test, TestingModule } from '@nestjs/testing';
import { TypeOrmController } from './type-orm.controller';
import { TypeOrmService } from './type-orm.service';

describe('TypeOrmController', () => {
  let controller: TypeOrmController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TypeOrmController],
      providers: [TypeOrmService],
    }).compile();

    controller = module.get<TypeOrmController>(TypeOrmController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
