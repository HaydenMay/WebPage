import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../user.model';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-add-users',
  templateUrl: './add-users.component.html',
  styleUrls: ['./add-users.component.css'],
})
export class AddUsersComponent implements OnInit {
  @ViewChild("f") newUserForm: NgForm;
  newUsername: string = '';
  isLoggedIn: boolean = false;
  description: string = '';
  constructor(private router: Router,private route: ActivatedRoute, private usersService: UsersService) {}

  ngOnInit(): void {}

  submitUser() {
    this.newUsername = this.newUserForm.form.value.newUsername;
    this.isLoggedIn = this.newUserForm.form.value.isLoggedIn;
    this.description = this.newUserForm.form.value.description;
    const newUser = new User (this.newUsername, this.isLoggedIn, this.description)
    this.usersService.addUser(newUser)
    this.router.navigate(['../'], {relativeTo: this.route});
  }
}
