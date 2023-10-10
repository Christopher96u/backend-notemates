import { CreateUserDto } from './create-user.dto';
import { Role } from '../../roles/entities/role.entity';
import { IsEmail, IsOptional, MinLength } from 'class-validator';
import { PartialType } from '@nestjs/mapped-types';

/**
* TODO: Improve DTO validation and required fields
*/
export class UpdateUserDto extends PartialType(CreateUserDto) {


  @IsOptional()
  @IsEmail()
  email?: string;

  @IsOptional()
  @MinLength(6)
  password?: string;

  @IsOptional()
  firstName?: string;

  @IsOptional()
  lastName?: string;
}
