import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { UsersService } from '../../domain/services/users.service';
import { AddUserDto } from '../dtos/AddUser.dto';
import { UpdateUserDto } from '../dtos/UpdateUser.dto';
import { UserIdDto } from '../dtos/UserId.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get('/single-user/:id')
  fetchUserDetails(@Param('id') id: string) {
    return this.usersService.getUserDetails(id);
  }

  @Post('signup')
  addUser(@Body() body: AddUserDto) {
    return this.usersService.createUser(body);
  }

  @Post('update-profile')
  editeUser(@Body() body: UpdateUserDto) {
    console.log(body);
    return this.usersService.updateUser(body);
  }

  @Get('all-users')
  fetchAllUsers() {
    return this.usersService.getAllUsers();
  }

  @Post('delete-user')
  deleteUser(@Body() body: UserIdDto) {
    return this.usersService.deleteUser(body);
  }
}
