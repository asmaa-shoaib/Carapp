import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  constructor() { }
  getToken():string{
    let x=localStorage.getItem("token");
     if(x){ 
    return x;
    }else{
      return "401";
    }
  }
}
 