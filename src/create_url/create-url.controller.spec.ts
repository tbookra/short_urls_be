import { Test, TestingModule } from '@nestjs/testing';
import { CreateUrlController } from './create-url.controller';

describe('CreateUrlController', () => {
  let controller: CreateUrlController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CreateUrlController],
    }).compile();

    controller = module.get<CreateUrlController>(CreateUrlController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
