import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { ServerComponent } from './server/server.component';
import { AddUsersComponent } from './users/add-users/add-users.component';
import { UsersComponent } from './users/users.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'servers', component: ServerComponent },
  { path: 'home', component: HomePageComponent},
  {
    path: 'users',
    component: UsersComponent,
    children: [
      { path: '', component: UsersComponent },
      { path: 'add', component: AddUsersComponent }
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
