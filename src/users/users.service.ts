import { Injectable } from '@nestjs/common';
import { User } from './user.entity';

@Injectable()
export class UsersService {
  private readonly users: User[] = [
    {
      id: 1,
      email: 'mambo@email.com',
      name: 'mambo',
    },
    {
      id: 2,
      email: 'jambo@email.com',
      name: 'jambo',
    },
  ];

  findOneByEmail(email: string): User | undefined {
    return this.users.find((user) => user.email === email);
  }
}
