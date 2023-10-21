import { Status } from 'src/statuses/entities/status.entity';
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
  firstName: string | null;

  @IsNotEmpty()
  lastName: string | null;

  hash?: string | null;

  role?: Role | null;

  status?: Status;
}
