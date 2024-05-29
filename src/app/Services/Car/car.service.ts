import { AdminApiService } from '../Api/admin-api.service';
import { Car } from './../../../Models/Car';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { car } from './../../../Models/Car';
import { GustApiService } from '../Api/gust-api.service';
@Injectable({
  providedIn: 'root'
})
export class CarService {

  constructor(private _ApiService:AdminApiService,private _GustApiService:GustApiService) {

   }  
    GetAllCars():Observable<any>{
      return this._GustApiService.get("Car");
    } 
    GetBestSellerCars():Observable<any>{
      return this._GustApiService.get("Car/bestseller");
    }
    GetCar(id:number):Observable<any>{
      return this._GustApiService.getItem("Car",id);
    }
    PostCar(car:car):Observable<any>{
      return this._ApiService.post(`Car`,car);
    }
    PutCar(car:Car,id:number):Observable<any>{
      return this._ApiService.put("Car",car,id); 
    }
    DeleteCar(id:number):Observable<any>{
      return this._ApiService.delete("Car",id);
    }

    
}

