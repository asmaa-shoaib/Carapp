import { AdminApiService } from '../Api/admin-api.service';
import { GustApiService } from './../Api/gust-api.service';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core'; 
@Injectable({
  providedIn: 'root'
})
export class BrandServicesService {

  constructor(private _ApiService:AdminApiService,private _GustApiService:GustApiService) { 

  }
  
  GetAll():Observable<any>{
    return this._GustApiService.get("brand");
  }
  GetBrand(id:number):Observable<any>{
    return this._GustApiService.getItem("brand",id);
  }
  GetCarInBrand(id:number):Observable<any>{
    return this._GustApiService.getItems(`brand/${id}/cars`);
  }
  PostBrand(brand:any):Observable<any>{
    return this._ApiService.post("brand/createBrand",brand);
  }
  PostBrandImage(formFile:FormData):Observable<any>{
    return this._ApiService.uploadImage("brand","saveimage",formFile);
  }
  Update(id:number,brand:any):Observable<any>{
    return this._ApiService.put("brand",brand,id);
  }
  Delete(id:number):Observable<any>{
    return this._ApiService.delete("brand",id);
  }
  GetBrandCars(id:number):Observable<any>{
    return this._GustApiService.getItemsProduct("brand",id,"Cars");
  }
}
