import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  NotFoundException,
} from '@nestjs/common';
import { SmehealthchecksService } from './smehealthchecks.service';
import { CreateSmehealthcheckDto } from './dto/create-smehealthcheck.dto';
import { UpdateSmehealthcheckDto } from './dto/update-smehealthcheck.dto';
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

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateSmehealthcheckDto: UpdateSmehealthcheckDto,
  ) {
    return this.smehealthchecksService.update(+id, updateSmehealthcheckDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.smehealthchecksService.remove(+id);
  }
}
