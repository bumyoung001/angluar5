export class User{
  username: string;
  password: string;
  firstname: string;
  lastname: string;
  email: string;
  enable: boolean;
  authorities: any[];

  constructor(){
    this.username = '';
    this.password = '';
    this.firstname = '';
    this.lastname = '';
    this.email = '';
    this.enable = false;
    this.authorities = [];
  }
}
