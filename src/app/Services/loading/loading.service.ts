import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class LoadingService {
private spinnerCounter =new BehaviorSubject<number>(0);
spinnerCounter$=this.spinnerCounter.asObservable();

  constructor() { }
  show(){
    this.spinnerCounter.next(this.spinnerCounter.value+1);
    console.log(this.spinnerCounter$);
  }
  hide(){
    this.spinnerCounter.next(this.spinnerCounter.value-1);
    console.log(this.spinnerCounter$);
  }

}
