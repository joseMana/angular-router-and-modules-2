import { Injectable } from '@angular/core';
import { user } from 'src/app/shared/models/user';

@Injectable()
export class UserService {

    users: user[] = [
        {
          id: 1,
          name: "Marvin Dale Baky",
          position: "Developer",
          motto: "Peace of Mind"
        },
        {
          id: 2,
          name: "Rolee Lee Jr.",
          position: "Architect",
          motto: "Lorem Ipsum"
        },
        {
          id: 3,
          name: "Eduard Lu",
          position: "Manager",
          motto: "Lorem Ipsum"
        }
      ]

    constructor() { }

    getUsers(): user[] {
        return this.users;
    }

    getUser(id: number): user {
        return this.users[id-1];
    }
}
