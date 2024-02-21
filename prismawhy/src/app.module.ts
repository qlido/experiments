import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './database/database.module';
import { PrismaModule } from './prisma/prisma.module';
import { TypeOrmssModule } from './typeORM/type-orm.module';

@Module({
  imports: [DatabaseModule, PrismaModule, TypeOrmssModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
