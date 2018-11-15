import { Component, OnInit } from '@angular/core';
import { UsersService, IUser } from '../users.service';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.less']
})
export class UsersListComponent implements OnInit {
  users: IUser[] = [];

  constructor(public usersService: UsersService) { }

  ngOnInit() {
    this.usersService.getUsers()
      .subscribe(
        (users) => this.users = users,
      );
  }

  addUser(first: string, last: string, title: string): void {
    this.users.push({ id: 2, firstName: first, lastName: last, title: title, createdAt: 'today', updatedAt: 'today'});
  }

}
