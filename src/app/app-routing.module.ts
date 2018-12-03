import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SessionsListComponent } from './sessions/sessions-list/sessions-list.component';
import { NgModule } from '@angular/core';
import { UsersListComponent } from './users/users-list/users-list.component';
import { SessionsDetailComponent } from './sessions/session-detail/session-detail.component';
import { UserDetailComponent } from './users/user-detail/user-detail.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'sessions', component: SessionsListComponent },
  { path: 'sessions/:sessionId', component: SessionsDetailComponent },
  { path: 'users', component: UsersListComponent },
  { path: 'users/:userId', component: UserDetailComponent },
];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forRoot(appRoutes)],
})
export class AppRoutingModule { }
