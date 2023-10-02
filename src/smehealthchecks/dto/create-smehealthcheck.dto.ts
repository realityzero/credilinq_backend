import { ApiExtraModels, ApiProperty } from '@nestjs/swagger';

export class Document {
  @ApiProperty()
  file_name: string;

  @ApiProperty()
  path: string;
}

@ApiExtraModels(Document)
export class CreateSmehealthcheckDto {
  // Probably wrong way to do created_at and updated_at
  created_at: Date = new Date();

  updated_at: Date = new Date();

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

  @ApiProperty({ type: () => Document, isArray: true })
  documents: Document[];
}
