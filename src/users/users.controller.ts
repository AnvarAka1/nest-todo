import { Controller, Get, Query } from '@nestjs/common'
import { UserListQueryParams, UsersService } from './users.service'

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Get()
  async getUsers(@Query() queryParams: UserListQueryParams) {
    await this.usersService.getUserList(queryParams);
  }
}
