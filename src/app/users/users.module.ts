import { NgModule } from '@angular/core';

import { UsersListComponent } from './users-list/users-list.component';
import { CommonModule } from '@angular/common';
import { UsersService } from './users.service';

@NgModule({
  declarations: [
      UsersListComponent,
  ],
  imports: [
      CommonModule,
  ],
  providers: [
      UsersService,
  ],
})
export class UsersModule { }
