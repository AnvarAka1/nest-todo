import { Injectable } from '@nestjs/common';

export type UserListQueryParams = {
  fullnameSearch?: string;
  minAge?: string;
  maxAge?: string;
  type?: string;
  limit?: string;
};

export type UserType = {
  id: number;
  fullName: string;
  age: number;
  type: string;
};

export const getUsers = async (): Promise<UserType[]> => [
  { id: 1, fullName: 'Ivan Ivanov', age: 17, type: 'student' },
  { id: 2, fullName: 'Aleksey Aleksandrovich', age: 14, type: 'developer' },
  { id: 3, fullName: 'Azamat Karimov', age: 36, type: 'manager' },
  { id: 4, fullName: 'Rustam Abdullaev', age: 32, type: 'tester' },
  { id: 5, fullName: 'Valentina Gromova', age: 39, type: 'manager' },
  { id: 6, fullName: 'Matvey Stepanov', age: 18, type: 'student' },
  { id: 7, fullName: 'Oleg Semyonov', age: 23, type: 'developer' },
  { id: 8, fullName: 'Alena Denisova', age: 19, type: 'trainee' },
  { id: 9, fullName: 'Pavel Petrov', age: 21, type: 'trainee' },
];

@Injectable()
export class UsersService {
  async getUserList(queryParams: UserListQueryParams) {
    const { fullnameSearch, minAge, maxAge, type, limit } = queryParams;

    return await getUsers();
  }
}
