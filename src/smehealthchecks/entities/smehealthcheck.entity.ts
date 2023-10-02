import { ApiProperty } from '@nestjs/swagger';
import { Prisma, SmeHealthcheck } from '@prisma/client';

export class SmehealthcheckEntity implements SmeHealthcheck {
  @ApiProperty()
  id: number;

  @ApiProperty()
  created_at: Date;

  @ApiProperty()
  updated_at: Date;

  @ApiProperty()
  company_uen: string;

  @ApiProperty()
  company_name: string;

  @ApiProperty()
  full_name: string;

  @ApiProperty()
  position_within_company: string;

  @ApiProperty()
  email: string;

  @ApiProperty()
  phone: string;

  @ApiProperty()
  documents: Prisma.JsonValue;
}
