import { Injectable, Inject } from '@angular/core';
import { Router, CanActivate } from '@angular/router';

@Injectable()
export class AuthGuardService implements CanActivate{

  constructor(
    private router: Router
  ) { }

  canActivate(){
    if(localStorage.getItem("token")){
      return true;
    }

    this.router.navigate(['/login']);
    return false;
  }

}
