import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
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
  findAll() {
    return this.smehealthchecksService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.smehealthchecksService.findOne(+id);
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
