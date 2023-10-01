import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Role } from 'src/roles/entities/role.entity';
import { RoleEnum } from 'src/roles/roles.enum';
import { Repository } from 'typeorm';

@Injectable()
export class RoleSeedService {
  constructor(
    @InjectRepository(Role)
    private roleRepository: Repository<Role>,
  ) { }

  async run() {

    const rolesToCreate = [RoleEnum.ADMIN, RoleEnum.USER, RoleEnum.PREMIUM];
    const createRolesPromises = rolesToCreate.map((role) => this.createRoleByName(role));

    await Promise.all(createRolesPromises);
  }

  async createRoleByName(role: RoleEnum) {
    const countRole = await this.roleRepository.count({
      where: {
        id: role,
      },
    });

    if (!countRole) {
      await this.roleRepository.save(
        this.roleRepository.create({
          id: role,
          name: RoleEnum[role],
        }),
      );
    }
  }
}


