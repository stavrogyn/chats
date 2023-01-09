import { Controller, Get, Param } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  getUser(@Param('id') id: string): ReturnType<UsersService['findOne']> {
    console.log(id);
    return this.usersService.findOne(id);
  }
}
