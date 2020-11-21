import { IsNotEmpty, IsString, IsNumber, IsDateString } from 'class-validator';

export class CreatePostDTO {
  @IsNotEmpty()
  @IsNumber()
  readonly moneyGoal: number;

  @IsString()
  @IsNotEmpty()
  readonly description: string;

  @IsDateString()
  @IsNotEmpty()
  readonly dateGoal: string;
}
