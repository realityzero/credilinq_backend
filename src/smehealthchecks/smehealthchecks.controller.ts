import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { SmehealthchecksService } from './smehealthchecks.service';
import { CreateSmehealthcheckDto } from './dto/create-smehealthcheck.dto';
import { UpdateSmehealthcheckDto } from './dto/update-smehealthcheck.dto';

@Controller('smehealthchecks')
export class SmehealthchecksController {
  constructor(private readonly smehealthchecksService: SmehealthchecksService) {}

  @Post()
  create(@Body() createSmehealthcheckDto: CreateSmehealthcheckDto) {
    return this.smehealthchecksService.create(createSmehealthcheckDto);
  }

  @Get()
  findAll() {
    return this.smehealthchecksService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.smehealthchecksService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateSmehealthcheckDto: UpdateSmehealthcheckDto) {
    return this.smehealthchecksService.update(+id, updateSmehealthcheckDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.smehealthchecksService.remove(+id);
  }
}
