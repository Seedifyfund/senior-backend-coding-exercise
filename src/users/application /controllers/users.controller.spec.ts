import { Test, TestingModule } from '@nestjs/testing';
import { UsersController } from './users.controller';
import { UpdateUserDto } from '../dtos/UpdateUser.dto';
import { UserIdDto } from '../dtos/UserId.dto';
import { UsersService } from '../../domain/services/users.service';

describe('UsersController', () => {
  let controller: UsersController;

  const mockUserService = {
    createUser: jest.fn(() => {
      return {
        success: true,
        message: 'User created successfully',
        data: {
          id: 'gvs9athpt',
          name: 'mobiles',
          email: 'mobiles@test.com',
          password: '123456sdfb',
        },
      };
    }),
    getUserDetails: jest.fn((id) => {
      return {
        success: true,
        message: 'User details fetched successfully',
        data: {
          id: 'gvs9athpt',
          name: 'mobiles',
          email: 'mobiles@test.com',
          password: '123456sdfb',
        },
      };
    }),
    updateUser: jest.fn((body: UpdateUserDto) => {
      return {
        success: true,
        message: 'User updated successfully',
      };
    }),
    getAllUsers: jest.fn(() => {
      return {
        success: true,
        message: 'Users fetched successfully',
        data: [
          {
            id: 'gvs9athpt',
            name: 'mobiles',
            email: 'mobiles@test.com',
            password: '123456sdfb',
          },
        ],
      };
    }),
    deleteUser: jest.fn((body: UserIdDto) => {
      return {
        success: true,
        message: 'User deleted successfully',
      };
    }),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UsersController],
      providers: [{ provide: UsersService, useValue: mockUserService }],
    }).compile();

    controller = module.get<UsersController>(UsersController);
  });

  it('add a new user', async () => {
    const product = {
      name: 'mobiles',
      email: 'mobiles@test.com',
      password: '123456sdfb',
    };

    const response: any = await controller.addUser(product);

    expect(response.success).toEqual(true);
    expect(response.data.email).toEqual('mobiles@test.com');
    expect(mockUserService.createUser).toHaveBeenCalled();
  });

  it('fetch a user details by user id', async () => {
    const payload = {
      id: 'gvs9athpt',
    };

    const response: any = await controller.fetchUserDetails(payload.id);

    expect(response.data.id).toEqual('gvs9athpt');
    expect(response.data.email).toEqual('mobiles@test.com');
    expect(mockUserService.getUserDetails).toHaveBeenCalled();
  });

  it('update a single user details',async ()=>{
    const payload : UpdateUserDto= {
      userId: 'gvs9athpt',
      name: 'steve',
      email: 'tony@stark.com',
      password: '123456sdfb',
    }

    const response = await controller.editeUser(payload);

    expect(response.success).toEqual(true);
    expect(mockUserService.updateUser).toHaveBeenCalled();
  })

  it('fetching all users', async()=>{
    const response = await controller.fetchAllUsers();
    
    expect(response.data.length).toBeGreaterThan(0);
    expect(mockUserService.getAllUsers).toHaveBeenCalled();
  })

  it('delete a user', async ()=>{
    const payload = { userId: 'gvs9athpt'};

    const result = await controller.deleteUser(payload);

    expect(result.success).toEqual(true);
    expect(mockUserService.deleteUser).toHaveBeenCalled();
  })
});
