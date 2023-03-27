import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getRoot() {
    return 'Welcome to main page. Please, proceed to `/users` page to see the user list =)';
  }
}
