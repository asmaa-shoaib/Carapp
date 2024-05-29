import { UserServiceService } from './../User-service/user-service.service';
import { environment } from '../../../environments/environment';
import { Injectable, OnInit } from '@angular/core'; 
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TokenService } from '../token/token.service';
@Injectable({
  providedIn: 'root'
})

export class AdminApiService {
  _token =this.token.getToken();
  constructor(private _HttpClient:HttpClient,private token:TokenService ) { }

  private setHeader(withFiles:boolean=false):HttpHeaders{ 
    let headers: HttpHeaders=new HttpHeaders();
    headers.append('token',this._token);   
    console.log(headers);
    return (headers);  
  }
 
  uploadImage(url:string,methodName:string,formData:FormData){
    return this._HttpClient.post(`${environment.apiURL}/${url}/${methodName}`,formData);
  }
  post(url:string,body:any){
    let x=this._HttpClient.post(`${environment.apiURL}/${url}`,body);
    console.log(x);
    return x;
  }
  put(url:string,body:any,id:number){
    return this._HttpClient.put(`${environment.apiURL}/${url}/${id}`,body,{headers:{'token': this.token.getToken()!}});
  }
  delete(url:string,id:number){
    return this._HttpClient.delete(`${environment.apiURL}/${url}/${id}`,{headers:{'token': this.token.getToken()!}});
  }
  
}
  