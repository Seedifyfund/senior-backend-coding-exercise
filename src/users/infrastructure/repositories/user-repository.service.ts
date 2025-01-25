import { Injectable } from '@nestjs/common';
import { IUsersRepository } from 'src/users/domain/interfaces/user.repository.interface';
import { User } from 'src/users/domain/models/user.model';

 
interface UserDetails {
  id: string;
  name: string;
  email: string;
  password: string;
}

@Injectable()
export class UserRepositoryService implements IUsersRepository {
  userData: UserDetails[];

  constructor() {
    this.userData = [];
  }

  // adding a new record to users
  save(userDetails: User): Promise<void> {
    console.log(userDetails);
    this.userData.push(userDetails.getDetails());
    return Promise.resolve();
  }

  // updating the user details
  update(userDetails: UserDetails): Promise<void> {
    console.log(userDetails);
    const userIndex = this.userData.findIndex(
      (singleUser) => singleUser.id === userDetails.id,
    );
    this.userData[userIndex] = userDetails;
    return Promise.resolve();
  }

  // retriving all the users list
  find(): Promise<any> {
    return Promise.resolve(this.userData);
  }

  // filtering a single user details
  findById(id: string): Promise<any> {
    const userDetails = this.userData.find(
      (singleUser) => singleUser.id === id,
    );
    return Promise.resolve(userDetails);
  }

  // deleting a user with userid
  delete(id: string): Promise<any> {
    const userIndex = this.userData.findIndex(
      (singleUser) => singleUser.id === id,
    );
    const [deletedUser] = this.userData.splice(userIndex, 1);
    return Promise.resolve(deletedUser);
  }
}
