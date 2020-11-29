import {
  IsNotEmpty,
  IsString,
  IsNumber,
  IsDateString,
  IsOptional,
} from 'class-validator';

export class CreatePostDTO {
  @IsNotEmpty()
  @IsString()
  readonly name: string;

  @IsOptional()
  @IsNumber()
  readonly moneyGoal?: number;

  @IsString()
  @IsNotEmpty()
  readonly description: string;

  @IsDateString()
  @IsOptional()
  readonly dateGoal?: string;
}
