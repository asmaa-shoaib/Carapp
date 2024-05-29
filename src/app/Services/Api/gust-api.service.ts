import { environment } from '../../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core'; 

@Injectable({
  providedIn: 'root'
})
export class GustApiService {
 
     
     
  constructor(private _HttpClient:HttpClient) { }
  
  
  get(url:string){
    return this._HttpClient.get(`${environment.apiURL}/${url}`);
  }
  getItem(url:string,id:number){
    return this._HttpClient.get(`${environment.apiURL}/${url}/${id}`);
  }
  getItems(url:string){
    return this._HttpClient.get(`${environment.apiURL}/${url}`);
  }
  getItemsProduct(product:string,id:number,items:string){
    return this._HttpClient.get(`${environment.apiURL}/${product}/${id}/${items}`);
  }
}
