import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable()
export class HttpInterceptorService implements HttpInterceptor{

  constructor(
    private router: Router
  ) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>>{
    const started = Date.now();

    return next
          .handle(req)
          .do(event =>{
                if(event instanceof HttpResponse){
                  const elapsed = Date.now() - started;
                  console.log(`Request for ${req.urlWithParams} took ${elapsed} ms.`);
                }
          })
          .catch(error => {
            if(error.status === 401){
              this.router.navigate(['/login']);
              return Observable.empty();
            }
            return Observable.throw(error);
          });
  }
}
