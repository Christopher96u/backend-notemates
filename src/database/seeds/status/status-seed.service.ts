import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Status } from 'src/statuses/entities/status.entity';
import { StatusEnum } from 'src/statuses/statuses.enum';
import { Repository } from 'typeorm';

@Injectable()
export class StatusSeedService {
  constructor(
    @InjectRepository(Status)
    private statusRepository: Repository<Status>,
  ) { }

  async run() {
    const count = await this.statusRepository.count();

    if (!count) {
      const statusesToCreate = [StatusEnum.ACTIVE, StatusEnum.INACTIVE, StatusEnum.INVITED];
      const createStatusesPromises = statusesToCreate.map((status) => this.createStatusByName(status));

      await Promise.all(createStatusesPromises);
    }
  }

  async createStatusByName(status: StatusEnum) {
    const countStatus = await this.statusRepository.count({
      where: {
        id: status,
      },
    });

    if (!countStatus) {
      await this.statusRepository.save(
        this.statusRepository.create({
          id: status,
          name: StatusEnum[status],
        }),
      );
    }
  }
}
