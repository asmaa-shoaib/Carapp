import { LoadingService } from './../loading/loading.service';
import { Injectable } from '@angular/core';
import { Observable, finalize } from 'rxjs';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class InterceptorService implements HttpInterceptor {

  constructor(private LoadingService:LoadingService) { }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    this.LoadingService.show();
    return next.handle(req).pipe(
      finalize(()=>{
        this.LoadingService.hide();
      })
    );
  }
}
