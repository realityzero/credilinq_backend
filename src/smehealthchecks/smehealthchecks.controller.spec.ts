import { Test, TestingModule } from '@nestjs/testing';
import { SmehealthchecksController } from './smehealthchecks.controller';
import { SmehealthchecksService } from './smehealthchecks.service';

describe('SmehealthchecksController', () => {
  let controller: SmehealthchecksController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SmehealthchecksController],
      providers: [SmehealthchecksService],
    }).compile();

    controller = module.get<SmehealthchecksController>(SmehealthchecksController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
