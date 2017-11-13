import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { ApiGatewayService } from '../shared/api-gateway.service';
import { User } from '../models/index';

@Injectable()
export class UserService {

  constructor(
    private apiGatewayService: ApiGatewayService
  ) { }

  getUsers(): Observable<any>{
    return this.apiGatewayService.get('/api/user').map((re: Response) => re);
  }
}
