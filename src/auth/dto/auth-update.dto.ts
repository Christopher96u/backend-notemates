import { IsNotEmpty, IsOptional, MinLength } from 'class-validator';

export class AuthUpdateDto {

  @IsOptional()
  @IsNotEmpty()
  firstName?: string;

  @IsOptional()
  @IsNotEmpty()
  lastName?: string;


  @IsOptional()
  @IsNotEmpty()
  @MinLength(6)
  password?: string;


  @IsOptional()
  @IsNotEmpty()
  oldPassword: string;
}
