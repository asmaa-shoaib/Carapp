import { Photo } from './../../../Models/Photo';
import { Injectable } from '@angular/core';
import { AdminApiService } from '../Api/admin-api.service';
import { Observable } from 'rxjs';
import { GustApiService } from '../Api/gust-api.service';
@Injectable({
  providedIn: 'root'
})
export class PhotoService {

  constructor(private _ApiService:AdminApiService,private _GustApiService:GustApiService) { }
  GetAllPhotoes():Observable<any>{
    return this._GustApiService.get("photo");
  }
  GetAllPhotoById(id:number):Observable<any>{
    return this._GustApiService.getItem(`photo`,id);
  }
  AddPhoto(photo:Photo):Observable<any>{
    return this._ApiService.post("Photo",photo);
  }
  PostPhotoImage(formFile:FormData):Observable<any>{
    return this._ApiService.uploadImage("photo","saveimage",formFile);
  }
  GetPhotoesInCar(id:number):Observable<any>{
    return this._GustApiService.getItems(`photo/${id}/CarDetails`);
  }
  DeletPhoto(id:number):Observable<any>{
    return this._ApiService.delete("photo",id);
  }
  EditPhoto(photo:Photo,id:number):Observable<any>{
    return this._ApiService.put("photo",photo,id);
  }
  DeleteUnWantedPhotoes(photo:Photo):Observable<any>{
    return this._ApiService.post("photo/DeletePhoto",photo);
  }
}
