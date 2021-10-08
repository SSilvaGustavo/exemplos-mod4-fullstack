import { PartialType } from '@nestjs/mapped-types';
import { Type } from 'class-transformer';
import { IsArray, IsInt, IsOptional, ValidateNested } from 'class-validator';
import { CreateImageDto } from './create-image.dto';

export class UpdateImageDto extends CreateImageDto {
    @IsInt()
    id: number;
}
