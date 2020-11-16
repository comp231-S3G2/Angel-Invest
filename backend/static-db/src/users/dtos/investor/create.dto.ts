import {
  IsEmail,
  IsNotEmpty,
  IsOptional,
  IsString,
  MaxLength,
  MinLength,
} from 'class-validator';

export class CreateInvestorAccountDTO {
  @IsNotEmpty()
  @IsString()
  readonly firstName: string;

  @IsString()
  @IsNotEmpty()
  readonly lastName: string;

  @IsNotEmpty()
  readonly phoneNumber: string;

  @IsNotEmpty()
  @IsEmail()
  readonly email: string;

  @MinLength(6)
  @MaxLength(20)
  @IsNotEmpty()
  readonly password: string;
}
