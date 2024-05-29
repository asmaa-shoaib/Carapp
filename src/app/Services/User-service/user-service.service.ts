import { User } from './../../../Models/User';
import { Injectable } from '@angular/core';
import {  Observable, Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
  constructor(private _HttpClient:HttpClient) {
   this.setLoggedStatus( this.islogged());
  }
  logged=new Subject<boolean>();
   
  login(user:User):Observable<any>{
    let SignIn= this._HttpClient.post(`${environment.apiURL}/Authenticate/Login`,user);
    this.setLoggedStatus(true);
    return SignIn;
  }

  logout(){
    this.removeToken()
    this.setLoggedStatus(false);
  }

  islogged():boolean{
    if(this.getToken()==null)
    {
      return false
    }
    else
    {
      return true;
    }
  }

  is_logged():boolean{
    this.GetloggedStatus().subscribe(
      res=>{
        console.log(res);
        if(res==true)
        return true;
        else return false
      }
      ,err=>{
        console.log(err);
        return false;
      })
    return this.islogged();
  }

  GetloggedStatus():Observable<boolean>{
    return this.logged.asObservable();
  }

  setLoggedStatus(status:boolean){
    this.logged.next(status);
  }

  getToken(){
   return localStorage.getItem("token");
  }

  removeToken(){
     localStorage.removeItem("token");
  }

}
