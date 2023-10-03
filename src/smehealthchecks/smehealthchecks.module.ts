import { Module } from '@nestjs/common';
import { SmehealthchecksService } from './smehealthchecks.service';
import { SmehealthchecksController } from './smehealthchecks.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  controllers: [SmehealthchecksController],
  providers: [SmehealthchecksService],
  imports: [PrismaModule],
  exports: [SmehealthchecksService],
})
export class SmehealthchecksModule {}
