import { CarService } from '../../Services/Car/car.service';;

import { Component, OnInit } from '@angular/core';
import { forkJoin } from 'rxjs'; 
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment.prod';;
import { car } from '../../../Models/Car';
import { Brand } from '../../../Models/Brand';
import { BrandServicesService } from '../../Services/Brand/brand-services.service';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrl: './search.component.scss'
})
export class SearchComponent implements OnInit {
  Cars:any;
Brands:any;
seachResult:any;
constructor(private _HttpClient:HttpClient,private _BrandService:BrandServicesService,private _CarService:CarService){}
load(){
  const request1 = this._HttpClient.get(`${environment.apiURL}/Car`);
  const request2 = this._HttpClient.get(`${environment.apiURL}/Branch`);
  const request3 = this._HttpClient.get(`${environment.apiURL}/brand`);
  return forkJoin([request1,request2,request3]).subscribe(
    res=>{
      console.log(res);
      this.Cars=res[0];
      this.Brands=res[2];
    });
}
GetResult(brandId:string,CarId:string){
  let brandid=parseInt(brandId);
  let Carid=parseInt(CarId);
  let car :car
  this._BrandService.GetCarInBrand(brandid).subscribe(
    res=>{
     // console.log(res)
    this.seachResult=res;}
    ,err=>{
    //  console.log(err)
    }
  )
  this._CarService.GetCar(Carid).subscribe(
    res=>{
      //console.log(res);
      car=res
    this.seachResult.push(car);
  //console.log(this.seachResult)
}
    ,err=>{
    //  console.log(err)
    }

  )


}
ngOnInit():void{
this.load();
}
}
