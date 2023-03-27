import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Between, MoreThan, Repository } from 'typeorm';
import { UserEntity } from './user.entity';

export type UserListQueryParams = {
  fullnameSearch?: string;
  minAge?: string;
  maxAge?: string;
  type?: string;
  limit?: string;
};

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(UserEntity)
    private userRepository: Repository<UserEntity>,
  ) {}

  async getUserList(queryParams: UserListQueryParams) {
    const fullnameSearch = queryParams.fullnameSearch;
    const maxAge = parseInt(queryParams.maxAge || '0');
    const minAge = parseInt(queryParams.minAge || '0');
    const limit = parseInt(queryParams.limit || '0');
    const type = queryParams.type;

    let age = null;

    if (minAge < maxAge) {
      age = Between(minAge, maxAge);
    }

    if (minAge > maxAge) {
      age = MoreThan(minAge);
    }

    const users = await this.userRepository.find({
      where: {
        fullName: fullnameSearch,
        age: age,
        type: type,
      },
      take: limit,
    });

    if (!users.length) {
      throw new HttpException(
        'User data is missing or does not match the search and filter criteria.',
        HttpStatus.BAD_REQUEST,
      );
    }

    return users;
  }
}
