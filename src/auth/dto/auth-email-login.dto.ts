import { IsNotEmpty } from 'class-validator';

export class AuthEmailLoginDto {
  @IsNotEmpty()
  email: string;

  @IsNotEmpty()
  password: string;
}
