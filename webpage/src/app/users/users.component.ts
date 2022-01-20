import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { User } from './user.model';
import { UsersService } from './users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  
  users: User[] = []
  username: string = '';
  isLoggedIn: boolean = false;
  description: string = '';
  addingUser: boolean = false

  constructor(private usersService: UsersService, private router: Router,private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.users = this.usersService.getUsers()
  }

  onAddUser() {
    
    this.addingUser = true
    this.router.navigate(['add'], {relativeTo: this.activatedRoute})
    /* this.users.push(
      this.addUser(this.username, this.isLoggedIn, this.description)
    );
    this.username = '';
    this.isLoggedIn = false;
    this.description = ''; */
  }

  getLoggedIn(id: number) {
    if (this.usersService.users[id].loggedIn === false) {
      return 'Is not logged in';
    }
    return 'Is Logged In';
  }
}
