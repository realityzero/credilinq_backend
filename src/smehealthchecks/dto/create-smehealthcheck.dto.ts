import { ApiExtraModels, ApiProperty } from '@nestjs/swagger';
import {
  Allow,
  IsArray,
  IsNotEmpty,
  IsPhoneNumber,
  IsString,
  IsUrl,
  MaxLength,
  MinLength,
} from 'class-validator';

export class Document {
  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  file_name: string;

  @IsString()
  @IsNotEmpty()
  @IsUrl()
  @ApiProperty()
  path: string;
}

@ApiExtraModels(Document)
export class CreateSmehealthcheckDto {
  // Probably bad way to do created_at and updated_at
  @Allow()
  created_at: Date = new Date();

  @Allow()
  updated_at: Date = new Date();

  @IsString()
  @IsNotEmpty()
  @MinLength(10)
  @MaxLength(10)
  @ApiProperty()
  company_uen: string;

  @IsString()
  @IsNotEmpty()
  @MinLength(2)
  @MaxLength(250)
  @ApiProperty()
  company_name: string;

  @IsString()
  @IsNotEmpty()
  @MinLength(2)
  @MaxLength(250)
  @ApiProperty()
  full_name: string;

  @IsString()
  @IsNotEmpty()
  @MinLength(2)
  @MaxLength(250)
  @ApiProperty()
  position_within_company: string;

  @IsString()
  @IsNotEmpty()
  @MinLength(2)
  @MaxLength(250)
  @ApiProperty()
  email: string;

  @IsString()
  @IsNotEmpty()
  @MinLength(11)
  @MaxLength(11)
  @IsPhoneNumber('SG')
  @ApiProperty()
  phone: string;

  @IsNotEmpty()
  @IsArray()
  @ApiProperty({ type: () => Document, isArray: true })
  documents: Document[];
}
