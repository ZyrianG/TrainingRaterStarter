import { Injectable } from '@angular/core';

@Injectable()
export class UsersService {
  usersExample = [{FirstName: 'Zyrian', LastName: 'Gantuangco', Title: 'Support'},
  {FirstName: 'Peter', LastName: 'Parker', Title: 'Spider-man'},
  {FirstName: 'Tony', LastName: 'Stark', Title: 'Iron Man'},
  {FirstName: 'Eugene', LastName: 'Krabs', Title: 'Krusty'},
  {FirstName: 'Spongebob', LastName: 'Squarepants', Title: 'Sponge'},
  ];

  constructor() { }

  getUsers(): {}[] {
    return this.usersExample;
  }

}
