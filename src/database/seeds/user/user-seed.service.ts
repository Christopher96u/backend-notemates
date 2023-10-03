import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { RoleEnum } from 'src/roles/roles.enum';
import { StatusEnum } from 'src/statuses/statuses.enum';
import { User } from 'src/users/entities/user.entity';
import { Repository } from 'typeorm';
import { faker } from '@faker-js/faker';
@Injectable()
export class UserSeedService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) { }
  //TODO: Rework + add faker + refactor + create users
  async run() {
    await this.createUsers();
  }

  async createUsers() {
    const createUsersByRole = [RoleEnum.ADMIN, RoleEnum.PREMIUM, RoleEnum.USER];
    const createUsersPromise = createUsersByRole.map(role => this.createUser(role));

    await Promise.all(createUsersPromise);
  }
  async createUser(role: RoleEnum) {
    const countUsers = this.usersRepository.count({
      where: {
        role: {
          id: role,
        },
      },
    });
    if (!countUsers) {
      const firstName = faker.person.firstName();
      const lastName = faker.person.lastName();
      await this.usersRepository.save(
        this.usersRepository.create({
          firstName: firstName,
          lastName: lastName,
          email: faker.internet.email({ firstName, lastName }),
          password: 'secret',//TODO: Add encrypt helper function
          role: {
            id: role,
            name: RoleEnum[role],
          },
          status: {
            id: StatusEnum.ACTIVE,
            name: StatusEnum[StatusEnum.ACTIVE],
          },
        }),
      );
    }
  }
}
