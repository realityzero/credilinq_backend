import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateSmehealthcheckDto } from './dto/create-smehealthcheck.dto';
import { UpdateSmehealthcheckDto } from './dto/update-smehealthcheck.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { Prisma } from '@prisma/client';

@Injectable()
export class SmehealthchecksService {
  constructor(private prisma: PrismaService) {}
  create(createSmehealthcheckDto: CreateSmehealthcheckDto) {
    try {
      return this.prisma.smeHealthcheck.create({
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-expect-error
        data: createSmehealthcheckDto,
      });
    } catch (error) {
      if (error instanceof Prisma.PrismaClientKnownRequestError) {
        throw new HttpException(error.message, HttpStatus.BAD_REQUEST);
      } else if (error instanceof Prisma.PrismaClientUnknownRequestError) {
        throw new HttpException(
          error.message,
          HttpStatus.INTERNAL_SERVER_ERROR,
        );
      } else if (error instanceof Prisma.PrismaClientValidationError) {
        throw new HttpException(error.message, HttpStatus.BAD_REQUEST);
      } else {
        throw new HttpException(
          error.message,
          HttpStatus.INTERNAL_SERVER_ERROR,
        );
      }
    }
  }

  findAll() {
    return this.prisma.smeHealthcheck.findMany();
    // return `This action returns all smehealthchecks`;
  }

  findOne(phone: string) {
    return this.prisma.smeHealthcheck.findFirst({
      where: { phone: `+65${phone}` },
    });
    // return `This action returns a #${id} smehealthcheck`;
  }

  update(id: number, updateSmehealthcheckDto: UpdateSmehealthcheckDto) {
    return `This action updates a #${id} smehealthcheck`;
  }

  remove(id: number) {
    return `This action removes a #${id} smehealthcheck`;
  }
}
