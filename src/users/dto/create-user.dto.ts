import { Role } from '../../roles/entities/role.entity';
import { IsEmail, IsNotEmpty, MinLength } from 'class-validator';

/**
* TODO: Improve DTO validation and required fields
*/
export class CreateUserDto {

  @IsNotEmpty()
  @IsEmail()
  email: string | null;

  @MinLength(6)
  password?: string;

  provider?: string;

  socialId?: string | null;

  @IsNotEmpty()
  firstName: string;

  @IsNotEmpty()
  lastName: string;
}
