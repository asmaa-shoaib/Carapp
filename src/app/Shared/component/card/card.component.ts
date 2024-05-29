import { Component, Input, OnInit } from '@angular/core';
import { Car } from '../../../../Models/Car';
import { Brand } from '../../../../Models/Brand';
import { CarService } from '../../../Services/Car/car.service';
import { BrandServicesService } from '../../../Services/Brand/brand-services.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent implements OnInit{
  @Input() ParamNum:number=0;
  CarId:number=0;
  car:Car={id:0,name:"",color:"",price:0,  BrandId:0,bestSeller:false,
  brand:{id:0,name:"",imageUrl:""},
  details:{id:0,description:"",modelYear:0,maxPower:0,torque:0,length:0,width:0,height:0,curbWeight:0,batteryEnergy:0,cltC_CruisingRange:0,maximumSspeed:0,cameras:0,acceleration:0,panoramic:"",carId:0},
  photoes:[]};

  Brands:Brand[]=[];
  constructor(private _CarService:CarService,private _Router:Router,private _BrandServicesService:BrandServicesService){}

 Goto(){

  this._Router.navigateByUrl(`/cars/detail/${this.car.id}`);
 // location.reload();
 }
  GetCar(id:number){
    this._CarService.GetCar(id).subscribe(
      res=>{
        console.log(res)
        this.car=res;
        console.log(this.car);
      }
      ,err=>{console.log(err);}
    )
  }
  ngOnInit(): void {
   this.GetCar(this.ParamNum);
  // this.GetCar(17);
  }

}
