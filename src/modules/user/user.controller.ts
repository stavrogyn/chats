import { Controller, Get, Param } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  getUser(@Param('id') id: string): ReturnType<UserService['findOne']> {
    console.log(id);
    return this.userService.findOne(id);
  }
}
