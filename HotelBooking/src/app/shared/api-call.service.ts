import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiCallService {

  url:string='http://localhost:3000';
  journey:any;

  constructor(private httpClient:HttpClient) {};

  postApiCall(endpoint:any,formdata:any){
    let url=this.url+'/'+ endpoint;
    return this.httpClient.post(url,formdata);
  }

  getApiCall(endpoint:string){
    let url=this.url+'/'+ endpoint;
    return this.httpClient.get(url);
  }
}
