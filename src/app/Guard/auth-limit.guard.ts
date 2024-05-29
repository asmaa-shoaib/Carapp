import { CanActivate ,ActivatedRouteSnapshot,RouterStateSnapshot,UrlTree, Router} from '@angular/router';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserServiceService } from './../Services/User-service/user-service.service';

@Injectable({
  providedIn:'root'
})
export class authLimitGuard implements CanActivate {
  constructor(private _UserService:UserServiceService,private _Router:Router){}
 canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
  if(this._UserService.is_logged()==false){
    this._Router.navigateByUrl("/admin/login");
    return false;}
  return true;
 }
};
