import { Component, OnInit, ViewEncapsulation } from '@angular/core';

import { User } from '../models/index';
import { UserService } from './user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class HomeComponent implements OnInit {

  users:User;

  constructor(
    private userService: UserService
  ) {
    this.users = new User();
  }

  ngOnInit() {
    this.userService.getUsers().subscribe(users => {
      console.log(users);
      this.users = users;
    });
  }

}
