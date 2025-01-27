import { Injectable, NotFoundException } from '@nestjs/common';
import { AddUserDto } from '../../application /dtos/AddUser.dto';
import { UserRepositoryService } from '../../infrastructure/repositories/user-repository.service';
import { User } from '../models/user.model';
import { UpdateUserDto } from '../../application /dtos/UpdateUser.dto';
import { UserIdDto } from '../../application /dtos/UserId.dto';

@Injectable()
export class UsersService {
  constructor(private readonly userRepo: UserRepositoryService) {}

  // fetching a single user details
  async getUserDetails(userId: string) {
    const result = {
      success: true,
      message: '',
      data: {},
    };

    const userDetails = await this.userRepo.findById(userId).catch((error) => {
      result.message = 'Unable to process right now';
      result.success = false;
      console.log(error);
    });

    console.log('user details', userDetails);

    if (!userDetails?.id && result.success) {
      result.success = false;
      result.message = 'User not found';
      delete result.data;
      throw new NotFoundException(result);
    } else if (result.success) {
      result.data = userDetails;
      result.message = 'User details fetched successfully';
      return result;
    } else {
      return result;
    }
  }

  // add a new record to users
  async createUser(body: AddUserDto) {
    const result = {
      success: true,
      message: '',
      data: {},
    };

    try {
      const id = Math.random().toString(36).substr(2, 9);
      const user = new User(id, body.email, body.name, body.password);

      await this.userRepo.save(user);
      result.data = user.getDetails();
      result.message = 'User created successfully';
    } catch (error) {
      result.message = 'Unable to process right now';
      result.success = false;
      console.log(error);
    }
    return result;
  }

  // update a user details
  async updateUser(body: UpdateUserDto) {
    const result = {
      success: true,
      message: '',
    };

    try {
      await this.userRepo.update({
        email: body.email,
        id: body.userId,
        name: body.name,
        password: body.password,
      });
      result.message = 'User updated successfully';
    } catch (error) {
      console.log(error);
      result.success = false;
      result.message = 'Unable to process right now';
    }
    return result;
  }

  // delete a user with user id
  async deleteUser(body: UserIdDto) {
    const result = {
      success: true,
      message: '',
    };

    try {
      const userDetalils = await this.userRepo.delete(body.userId);
      console.log('User deleted', userDetalils);
      result.message = 'User deleted successfully';
    } catch (error) {
      console.log(error);
      result.success = false;
      result.message = 'Unable to process right now';
    }
    return result;
  }

  // fetching all users details
  async getAllUsers() {
    const result = {
      success: true,
      message: '',
      data:[],
    };

    try {
      const usersList = await this.userRepo.find();
      result.message = 'Users fetched successfully';
      result.data = usersList;
    } catch (error) {
      console.log(error);
      result.success = false;
      result.message = 'Unable to process right now';
    }

    return result;
  }
}
