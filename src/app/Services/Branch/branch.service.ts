import { GustApiService } from './../Api/gust-api.service';
import { BranchesComponent } from './../../Branch/branches/branches.component';
import { AdminApiService } from '../Api/admin-api.service';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Branch } from '../../../Models/Branch';

@Injectable({
  providedIn: 'root'
})
export class BranchService {

  constructor(private _ApiService:AdminApiService,private _GustApiService:GustApiService) { 

  }
  GetAllBranch():Observable<any>{
    return this._GustApiService.get('branch')
  }
  GetBranch(id:number):Observable<any>{
    return this._GustApiService.getItem('branch',id)
  }
  PostBranch(branch:Branch):Observable<any>{
    return this._ApiService.post('branch',branch)
  }
  PutBranch(id:number,branch:Branch):Observable<any>{
    return this._ApiService.put('branch',branch,id)
  }
  DelBranch(id:number):Observable<any>{
    return this._ApiService.delete('branch',id)
  }
  
}