import { Injectable ,Injector } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TokenService } from './Services/token/token.service';
@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor {

  constructor( private inject:Injector ) { }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

   let tok=this.inject.get(TokenService);
   //console.log(tok.getToken());
    let tokenizedreq=req.clone({
      setHeaders:{
        'Authorization' :`Bearer ${tok.getToken()}`
      }
    })
    return next.handle(tokenizedreq);
  }

}
