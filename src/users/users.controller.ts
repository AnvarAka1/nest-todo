import { Controller, Get, Param, Query } from "@nestjs/common";
import { UsersService, UserListQueryParams } from "./users.service";


@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Get()
  getUsers (@Query() queryParams: UserListQueryParams) {
    this.usersService.getUserList(queryParams)
  }
}
