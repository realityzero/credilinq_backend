import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  NotFoundException,
  UseGuards,
} from '@nestjs/common';
import { SmehealthchecksService } from './smehealthchecks.service';
import { CreateSmehealthcheckDto } from './dto/create-smehealthcheck.dto';
import {
  ApiBearerAuth,
  ApiCreatedResponse,
  ApiOkResponse,
  ApiTags,
} from '@nestjs/swagger';
import { SmehealthcheckEntity } from './entities/smehealthcheck.entity';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

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
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @ApiOkResponse({ type: SmehealthcheckEntity, isArray: true })
  async findAll() {
    return await this.smehealthchecksService.findAll();
  }

  @Get(':phone')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
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
