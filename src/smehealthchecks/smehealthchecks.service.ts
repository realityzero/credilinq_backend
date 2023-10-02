import { Injectable } from '@nestjs/common';
import { CreateSmehealthcheckDto } from './dto/create-smehealthcheck.dto';
import { UpdateSmehealthcheckDto } from './dto/update-smehealthcheck.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class SmehealthchecksService {
  constructor(private prisma: PrismaService) {}
  create(createSmehealthcheckDto: CreateSmehealthcheckDto) {
    return 'This action adds a new smehealthcheck';
  }

  findAll() {
    return this.prisma.smeHealthcheck.findMany();
    // return `This action returns all smehealthchecks`;
  }

  findOne(id: number) {
    return `This action returns a #${id} smehealthcheck`;
  }

  update(id: number, updateSmehealthcheckDto: UpdateSmehealthcheckDto) {
    return `This action updates a #${id} smehealthcheck`;
  }

  remove(id: number) {
    return `This action removes a #${id} smehealthcheck`;
  }
}
