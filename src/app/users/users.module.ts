import { NgModule } from '@angular/core';

import { UsersListComponent } from './users-list/users-list.component';
import { CommonModule } from '@angular/common';
import { UsersService } from './users.service';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
      UsersListComponent,
      UserDetailComponent,
  ],
  imports: [
      CommonModule,
      FormsModule,
  ],
  providers: [
      UsersService,
  ],
})
export class UsersModule { }
