import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.less']
})
export class UsersListComponent implements OnInit {
  users = [];

  constructor(public usersService: UsersService) { }

  ngOnInit() {
    this.users = this.usersService.getUsers();
  }

  addUser(first: string, last: string, title: string): void {
    this.users.push({FirstName: first, LastName: last, Title: title});
  }

}