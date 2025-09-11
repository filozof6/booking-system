import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { User } from './user.entity';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  create(@Body() body: Partial<User>) {
    return this.userService.create(body);
  }

  @Get()
  getAll() {
    return this.userService.getAll();
  }

  @Get(':id')
  getUser(@Param('id') id: string) {
    return this.userService.getUser(Number(id));
  }

  @Delete(':id')
  deleteUser(@Param('id') id: string) {
    return this.userService.delete(Number(id));
  }
}
