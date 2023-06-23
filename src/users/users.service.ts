import { Injectable } from '@nestjs/common';
import { CreateUserInput } from './qraphql/inputs/create-user.input';

@Injectable()
export class UsersService {
  private readonly users = [
    {
      id: 0,
      username: 'admin',
      password: 'admin'
    },
    {
      id: 1,
      username: 'bezrodin',
      password: 'admin'
    }
  ];

  create(createUserInput: CreateUserInput) {
    const user = {
      ...createUserInput,
      id: this.users.length + 1,
    }

    this.users.push(user);

    return user;
  }

  findAll() {
    return this.users;
  }

  findOne(username: string) {
    return this.users.find((user) => user.username === username);
  }
}
