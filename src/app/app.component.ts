import { Component, OnInit } from '@angular/core';

import { AuthenticationService } from './login/authentication.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'app';
  isFlag:boolean;

  loading: string;

  constructor(
    private authenticationService: AuthenticationService
  ){
    this.isFlag = false;
  }

  ngOnInit(){
    this.authenticationService.loading.subscribe((e) => {
      this.loading = e;
      if(this.loading == 'none'){
        this.isFlag = false;
      }
    });
  }

  sideClick(){
    this.isFlag = this.isFlag == true ? false : true;
  }
}
