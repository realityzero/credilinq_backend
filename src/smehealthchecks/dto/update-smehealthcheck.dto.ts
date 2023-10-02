import { PartialType } from '@nestjs/swagger';
import { CreateSmehealthcheckDto } from './create-smehealthcheck.dto';

export class UpdateSmehealthcheckDto extends PartialType(
  CreateSmehealthcheckDto,
) {}
