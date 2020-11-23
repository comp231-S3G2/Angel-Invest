import { IsNotEmpty, IsString, IsNumber, IsDateString, IsOptional } from 'class-validator';

export class CreatePostDTO {
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
