import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders, HttpParams } from '@angular/common/http';

const JSON_MAPPER_FN = res => res.json();

const errorHandler = (res) => {
  console.log("=] errorHandler : ", res);
  return null;
};



@Injectable()
export class ApiGatewayService {

  constructor(
    private http:HttpClient
  ) { }

  get(url: string){
    const headers = new HttpHeaders()
                        .set("Content-Type", "application/json")
                        .set("Authorization","Bearer " + JSON.parse(localStorage.getItem('token')).token);
    return this.http.get<any>(url, {headers});
  }

  post(url:string, data:any){
    const headers = new HttpHeaders()
                        .set("Content-Type", "application/json")
                        .set("Authorization","Bearer " + JSON.parse(localStorage.getItem('token')).token);
    return this.http.post(url, data, {headers});
  }

  auth(url:string, data:any){
    const headers = new HttpHeaders().set("Content-Type", "application/json");

    return this.http.post(url, data, {headers});
  }





}
