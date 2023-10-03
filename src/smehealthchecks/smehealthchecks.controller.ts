import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  NotFoundException,
} from '@nestjs/common';
import { SmehealthchecksService } from './smehealthchecks.service';
import { CreateSmehealthcheckDto } from './dto/create-smehealthcheck.dto';
import { ApiCreatedResponse, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { SmehealthcheckEntity } from './entities/smehealthcheck.entity';

@Controller('smehealthchecks')
@ApiTags('smehealthchecks')
export class SmehealthchecksController {
  constructor(
    private readonly smehealthchecksService: SmehealthchecksService,
  ) {}

  @Post()
  @ApiCreatedResponse({ type: SmehealthcheckEntity })
  create(@Body() createSmehealthcheckDto: CreateSmehealthcheckDto) {
    return this.smehealthchecksService.create(createSmehealthcheckDto);
  }

  @Get()
  @ApiOkResponse({ type: SmehealthcheckEntity, isArray: true })
  async findAll() {
    return await this.smehealthchecksService.findAll();
  }

  @Get(':phone')
  @ApiOkResponse({ type: SmehealthcheckEntity })
  async findOne(@Param('phone') phone: string) {
    const healthcheckData = await this.smehealthchecksService.findOne(phone);
    if (!healthcheckData) {
      throw new NotFoundException(
        `Healthcheck Data with ${phone} does not exist.`,
      );
    }
    return healthcheckData;
  }
}
