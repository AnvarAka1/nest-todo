import { Injectable, OnApplicationBootstrap } from '@nestjs/common';
import { DataSource } from 'typeorm';
import { UserEntity } from './users/user.entity';
import { usersMockData } from './mockData/users';

@Injectable()
export class AppService implements OnApplicationBootstrap {
  constructor(private dataSource: DataSource) {}

  async onApplicationBootstrap(): Promise<any> {
    const usersRepository = this.dataSource.getRepository(UserEntity);
    const isUserExist = await usersRepository.findOne({
      where: { id: usersMockData[0].id },
    });

    if (!isUserExist) {
      const users = usersRepository.create(usersMockData);
      await usersRepository.insert(users);
    }
  }
}
