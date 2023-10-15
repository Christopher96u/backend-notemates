import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeepPartial, Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './entities/user.entity';
import { NullableType } from '../utils/types/nullable.type';
import { EntityCondition } from 'src/utils/types/entity-condition.type';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) { }

  create(createProfileDto: CreateUserDto): Promise<User> {
    return this.usersRepository.save(
      this.usersRepository.create(createProfileDto),
    );
  }

  findAll(): Promise<User[]> {
    return this.usersRepository.find();
  }

  async findOne(fields: EntityCondition<User>): Promise<NullableType<User>> {
    const user = await this.usersRepository.findOne({ where: fields });
    if (!user) {
      throw new NotFoundException(`User not found`);
    }
    return user;
  }

  async update(id: number, payload: DeepPartial<User>): Promise<User> {
    const currentUser = await this.usersRepository.findOneBy({ id });
    if (!currentUser) {
      throw new NotFoundException(`User with id #${id} not found`);
    }
    this.usersRepository.merge(currentUser, payload);
    return this.usersRepository.save(currentUser);
  }

  async softDelete(id: number): Promise<void> {
    const removeResponse = await this.usersRepository.softDelete(id);
    if (removeResponse.affected === 1) return;
    throw new NotFoundException(`User with id #${id} cant be removed`);
  }

  //TODO: Implement hard delete
}
