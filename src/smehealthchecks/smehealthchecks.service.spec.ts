import { Test, TestingModule } from '@nestjs/testing';
import { SmehealthchecksService } from './smehealthchecks.service';

describe('SmehealthchecksService', () => {
  let service: SmehealthchecksService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SmehealthchecksService],
    }).compile();

    service = module.get<SmehealthchecksService>(SmehealthchecksService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
