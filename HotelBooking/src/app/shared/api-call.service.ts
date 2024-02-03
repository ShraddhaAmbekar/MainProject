import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiCallService {

  url:string='http://localhost:3000';
  journey:any;
  userName: any;
  dataById: any;

  constructor(private httpClient:HttpClient) {};

  postApiCall(endpoint:any,formdata:any){
    let url=this.url+'/'+ endpoint;
    return this.httpClient.post(url,formdata);
  }

  getApiCall(endpoint:string,id?:any){
    let url=id? this.url+'/'+ endpoint+'/'+id : this.url+'/'+ endpoint;
    return this.httpClient.get(url);
  }
  updateData(endpoint:any,id:any,body:any){
    let url=this.url+'/'+ endpoint+'/'+id
    return this.httpClient.patch(url,body)
  }
  deleteApiCall(endpoint:any, id:any){
    let url=this.url+'/'+ endpoint+'/'+ id
    return this.httpClient.delete(url,id)
  }
}
