import { ApiExtraModels, ApiProperty } from '@nestjs/swagger';

export class Document {
  @ApiProperty()
  file_name: string;

  @ApiProperty()
  path: string;
}

@ApiExtraModels(Document)
export class CreateSmehealthcheckDto {
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
