import { Injectable, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiGatewayService } from '../shared/api-gateway.service';

@Injectable()
export class AuthenticationService {
  public token: string;
  public loading:EventEmitter<any> = new EventEmitter<any>();

  constructor(
    private apiGatewayService: ApiGatewayService
  ) {
    var currentUser = JSON.parse(localStorage.getItem('token'));
    this.token = currentUser && currentUser.token;
  }

  login(username:string, password: string): Observable<boolean>{
    return this.apiGatewayService.auth("/api/auth", JSON.stringify({username:username, password:password}))
      .map((res: Response) => {
        let param:any = res;
        let token = param && param['token'];

        console.log(token);

        if(token){
          this.token = token;

          localStorage.setItem('token', JSON.stringify({username:username, token:token}));
          this.loading.emit('');
          return true;
        } else {
          this.loading.emit('none');
          return false;
        }
      });
  }


  logout(): void{
    this.token = null;
    this.loading.emit('none');
    localStorage.removeItem('token');
  }

}
