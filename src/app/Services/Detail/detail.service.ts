import { Detail } from './../../../Models/Detail';
import { AdminApiService } from '../Api/admin-api.service';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GustApiService } from '../Api/gust-api.service';

@Injectable({
  providedIn: 'root'
})
export class DetailService {

  constructor(private _ApiService:AdminApiService,private _GustApiService:GustApiService) { }
   GetAll():Observable<any>{
    return this._GustApiService.get("detail");
  }
   GetItem(id:number):Observable<any>{
    return this._GustApiService.getItem("detail",id);
  }
   PostDetail(detail:Detail):Observable<any>{
    return this._ApiService.post("detail",detail);
  }
   EditDetail(detail:Detail,id:number):Observable<any>{
    return this._ApiService.put("Detail",detail,detail.id);
  }
   DeleteDetail(id:number):Observable<any>{
    return this._ApiService.delete("detail",id);
  }
}
